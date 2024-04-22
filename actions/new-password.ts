"use server";

import bcrypt from "bcryptjs";
import {
	newPasswordSchema,
	type NewPasswordFormValues,
} from "@/components/auth/NewPasswordForm/validation/newPasswordSchema";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { actionMessages } from "@/lib/appData";
import { db } from "@/lib/db";

export const newPassword = async (values: NewPasswordFormValues, token?: string | null) => {
	if (!token) {
		return {
			error: actionMessages.NEW_PASSWORD.missingToken,
		};
	}

	// Fields validation
	const validatedFields = newPasswordSchema.safeParse(values);
	if (!validatedFields.success) {
		return {
			error: actionMessages.NEW_PASSWORD.invalidFields,
		};
	}

	const { password } = validatedFields.data;
	// token validation
	const existingToken = await getPasswordResetTokenByToken(token);
	// Finding token in database
	if (!existingToken) {
		return { error: actionMessages.NEW_PASSWORD.invalidToken };
	}

	const hasExpired = new Date(existingToken.expires) < new Date();
	if (hasExpired) {
		return {
			error: actionMessages.NEW_PASSWORD.tokenExpired,
		};
	}

	// We check existing user which match password
	const existingUser = await getUserByEmail(existingToken.email);
	if (!existingUser) {
		return {
			error: actionMessages.NEW_PASSWORD.emailNotExist,
		};
	}

	// Finally hash password with bcrypt
	const hashedPassword = await bcrypt.hash(password, 10);
	await db.user.update({
		where: { id: existingUser.id },
		data: { password: hashedPassword },
	});

	await db.passwordResetToken.delete({
		where: {
			id: existingToken.id,
		},
	});

	return {
		success: actionMessages.NEW_PASSWORD.successPasswordUpdated,
	};
};
