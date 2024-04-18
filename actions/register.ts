"use server";
import bcrypt from "bcryptjs";
import {
	type RegisterFormValues,
	registerSchema,
} from "../components/auth/RegisterForm/validation/registerSchema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { actionMessages, pagesText } from "@/lib/appData";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: RegisterFormValues) => {
	// server site validation
	const validatedFields = registerSchema.safeParse(values);
	if (!validatedFields.success) {
		return {
			error: pagesText.AUTH_PAGES.REGISTER.invalidFieldsError,
		};
	}

	const { email, name, password } = validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return {
			error: pagesText.AUTH_PAGES.REGISTER.existingUserError,
		};
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	const verificationToken = await generateVerificationToken(email);

	await sendVerificationEmail(verificationToken.email, verificationToken.token);

	return {
		success: actionMessages.REGISTER.emailConfirmation,
	};
};
