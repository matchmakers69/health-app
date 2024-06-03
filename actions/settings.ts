"use server";

import { type SettingsFormValues } from "@/components/settings/validation/settingsSchema";
import { getUserById } from "@/data/user";
import { actionMessages } from "@/lib/appData";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const settings = async (values: SettingsFormValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: actionMessages.SETTING.unauthorized };
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return { error: actionMessages.SETTING.unauthorized };
	}

	await db.user.update({
		where: { id: dbUser.id },
		data: {
			...values,
		},
	});

	return { success: "Settings updated!" };
};
