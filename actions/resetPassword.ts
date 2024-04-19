"use server";

import { resetSchema, type ResetFormValues } from "@/components/auth/ResetForm/validation/resetSchema";
import { getUserByEmail } from "@/data/user";
import { actionMessages } from "@/lib/appData";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const resetPassword = async (values: ResetFormValues) => {
	const validatedFields = resetSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: actionMessages.RESET_PASSWORD.invalidEmailAddress,
		};
	}

	const { email } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser) {
		return {
			error: actionMessages.RESET_PASSWORD.emailNotFound,
		};
	}

	const passwordResetToken = await generatePasswordResetToken(email);
	await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);

	return { success: actionMessages.RESET_PASSWORD.resetEmailSent };
};
