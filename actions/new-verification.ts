"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { actionMessages } from "@/lib/appData";
import { db } from "@/lib/db";

export const newVerification = async (token: string) => {
	const existingToken = await getVerificationTokenByToken(token);

	if (!existingToken) {
		return { error: actionMessages.VERIFICATION.tokenNonExist };
	}

	const hasExpired = new Date(existingToken.expires) < new Date();

	if (hasExpired) {
		return {
			error: actionMessages.VERIFICATION.tokenHasExpired,
		};
	}

	const existingUser = await getUserByEmail(existingToken.email);
	if (!existingUser) {
		return { error: actionMessages.VERIFICATION.userNonExist };
	}

	await db.user.update({
		where: {
			id: existingUser.id,
		},
		data: {
			emailVerified: new Date(),
			email: existingToken.email,
		},
	});

	await db.verificationToken.delete({
		where: { id: existingToken.id },
	});

	return { success: actionMessages.VERIFICATION.emailVerified };
};
