"use server";

import bcrypt from "bcryptjs";
import { type SettingsFormValues } from "@/components/settings/validation/settingsSchema";
import { getUserByEmail, getUserById } from "@/data/user";
import { actionMessages } from "@/lib/appData";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const settings = async (values: SettingsFormValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: actionMessages.SETTING.unauthorized };
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return { error: actionMessages.SETTING.unauthorized };
	}

	// It is possibly not necessary checkout - Accountform does not have now 2Factor switcher
	if (user.is0Auth) {
		values.email = undefined;
		values.password = undefined;
		values.newPassword = undefined;
	}

	if (values.email && values.email !== user.email) {
		const existingUser = await getUserByEmail(values.email);
		if (existingUser && existingUser.id !== user.id) {
			return {
				error: actionMessages.SETTING.emailAlreadyInUse,
			};
		}

		const verificationToken = await generateVerificationToken(values.email);
		await sendVerificationEmail(verificationToken.email, verificationToken.token);

		return {
			success: "Verification email sent!",
		};
	}

	if (values.password && values.newPassword && dbUser.password) {
		const passwordsMatch = await bcrypt.compare(values.password, dbUser.password);
		if (!passwordsMatch) {
			return { error: "Incorrect password!" };
		}

		// New password needs to be hashed
		const hashedPassword = await bcrypt.hash(values.newPassword, 10);
		values.password = hashedPassword;
		values.newPassword = undefined;
	}

	await db.user.update({
		where: { id: dbUser.id },
		data: {
			...values,
		},
	});

	return { success: "Settings updated!" };
};
