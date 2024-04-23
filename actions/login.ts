"use server";

import { AuthError } from "next-auth";
import { type LoginFormValues, loginSchema } from "../components/auth/LoginForm/validation/loginSchema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "@/auth";
import { generateTwoFactorToken, generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { actionMessages } from "@/lib/appData";
import { sendTwoFactorTokenEmail, sendVerificationEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const login = async (values: LoginFormValues, callbackUrl?: string | null) => {
	// server site validation
	const validatedFields = loginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: actionMessages.LOGIN.invalidFields };
	}

	const { email, password, code } = validatedFields.data;
	const existingUser = await getUserByEmail(email);

	if (!existingUser?.email || !existingUser.password) {
		return { error: actionMessages.LOGIN.emailNotExist };
	}

	if (!existingUser.emailVerified) {
		const verificationToken = await generateVerificationToken(existingUser.email);

		await sendVerificationEmail(verificationToken.email, verificationToken.token);

		return { success: actionMessages.LOGIN.confirmationEmailSent };
	}

	// 2FA
	if (existingUser.isTwoFactorEnabled && existingUser.email) {
		if (code) {
			const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
			if (!twoFactorToken) {
				return { error: actionMessages.LOGIN.invalidCode };
			}
			if (twoFactorToken.token !== code) {
				return { error: actionMessages.LOGIN.invalidCode };
			}

			const codeHasExpired = new Date(twoFactorToken.expires) < new Date();

			if (codeHasExpired) {
				return { error: actionMessages.LOGIN.codeExpired };
			}

			// We can remove 2FA token and add confirmation - user can finally login
			await db.twoFactorToken.delete({
				where: { id: twoFactorToken.id },
			});

			// Check if we have existing confirmation
			const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
			if (existingConfirmation) {
				await db.twoFactorConfirmation.delete({
					where: { id: existingConfirmation.id },
				});
			}

			await db.twoFactorConfirmation.create({
				data: {
					userId: existingUser.id,
				},
			});
		} else {
			console.log("chujek");
			const twoFactorToken = await generateTwoFactorToken(existingUser.email);
			await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
			return {
				twoFactor: true,
			};
		}
	}

	// User logins here
	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: actionMessages.LOGIN.invalidCredentials };
				default:
					return {
						error: actionMessages.LOGIN.loginWentWrong,
					};
			}
		}
		throw error;
	}
};
