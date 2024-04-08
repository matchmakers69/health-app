"use server";

import { AuthError } from "next-auth";
import { type LoginFormValues, loginSchema } from "../components/auth/LoginForm/validation/loginSchema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "@/auth";

export const login = async (values: LoginFormValues) => {
	// server site validation
	const validatedFields = loginSchema.safeParse(values);
	if (!validatedFields.success) {
		return {
			error: "Invalid fields!",
		};
	}

	const { email, password } = validatedFields.data;
	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials!" };
				default:
					return {
						error: "Something went wrong with login!",
					};
			}
		}
		throw error;
	}
};
