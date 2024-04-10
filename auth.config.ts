import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "@/app/components/auth/LoginForm/validation/loginSchema";
import { getUserByEmail } from "@/data/user";

export default {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Github({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		Credentials({
			async authorize(credentials) {
				const validatedFields = loginSchema.safeParse(credentials);
				if (validatedFields.success) {
					const { email, password } = validatedFields.data;
					// We want to check if email is connected with any email in database
					const user = await getUserByEmail(email);
					if (!user?.password) {
						return null;
					}
					const passwordsMatch = await bcrypt.compare(password, user.password); // compare password hash
					if (passwordsMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
