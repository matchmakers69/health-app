import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type UserRole } from "@prisma/client";
import { getUserById } from "./data/user";
import { routes } from "./lib/routes";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: routes.LOGIN,
		error: routes.ERROR,
	},
	events: {
		// IMPORTANT! Added to make sure if user logs in with Github or Google emeil will be verified
		async linkAccount({ user }) {
			await db.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			});
		},
	},
	callbacks: {
		async signIn({ user, account }) {
			// Allow OAuth without email verification
			if (account?.provider !== "credentials") return true;

			if (user.id) {
				const existingUser = await getUserById(user.id);

				// Prevent signin without email verification
				if (!existingUser?.emailVerified) return false;

				// TODO: Add 2FA check
				return true; // By default you allow users to sign in
			} else {
				return false; // Handle the case where user is undefined
			}
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}
			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;
			const existingUser = await getUserById(token.sub);
			if (!existingUser) return token;
			// assign the role to token
			token.role = existingUser.role;
			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
