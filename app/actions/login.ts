"use server";

import { type LoginFormValues, loginSchema } from "../components/auth/LoginForm/validation/loginSchema";

export const login = async (values: LoginFormValues) => {
	// server site validation
	const validatedFields = loginSchema.safeParse(values);
	if (!validatedFields.success) {
		return {
			error: "Invalid fields!",
		};
	}

	return {
		success: "Email sent!",
	};
};
