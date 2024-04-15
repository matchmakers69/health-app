"use server";

import { AuthError } from "next-auth";
import { signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function logout() {
	try {
		await signOut({
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "SignOutError":
					return { error: "Error with signing out!" };
				default:
					return {
						error: "Could not sign out user!",
					};
			}
		}
		throw error;
	}
}
