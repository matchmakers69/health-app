import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const settingsSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: validationRules.SETTINGS.nameRequired })
			.max(30, { message: validationRules.SETTINGS.nameMaxLength })
			.refine(
				(value) => {
					// Check if the name contains only one space between words
					return /^\s*\S+(\s+\S+)*\s*$/.test(value);
				},
				{ message: validationRules.SETTINGS.nameOneSpace },
			)
			.optional(),
		email: z
			.string()
			.min(1, { message: validationRules.SETTINGS.emailRequired })
			.email(validationRules.SETTINGS.invalidEmailAddress)
			.optional(),
		password: z
			.string()
			.refine((val) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(val), {
				message:
					"Password must be at least 6 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
			})
			.optional(),
		newPassword: z
			.string()
			.refine((val) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(val), {
				message:
					"New password must be at least 6 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
			})
			.optional(),
	})
	.refine(
		(data) => {
			if (data.password && !data.newPassword) {
				return false;
			}
			return true;
		},
		{
			message: "New password is required if password is provided!",
			path: ["newPassword"],
		},
	)
	.refine(
		(data) => {
			if (data.newPassword && !data.password) {
				return false;
			}
			return true;
		},
		{
			message: "Password is required if new password is provided!",
			path: ["password"],
		},
	);

export type SettingsFormValues = z.infer<typeof settingsSchema>;
