import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const settingsSchema = z.object({
	name: z.optional(
		z
			.string()
			.min(2, { message: validationRules.SETTINGS.nameRequired })
			.max(30, { message: validationRules.SETTINGS.nameMaxLength })
			.refine(
				(value) => {
					// Check if the name contains only one space between words
					return /^\s*\S+(\s+\S+)*\s*$/.test(value);
				},
				{ message: validationRules.SETTINGS.nameOneSpace },
			),
	),
	// email: z
	// 	.string()
	// 	.min(1, { message: validationRules.REGISTER.emailRequired })
	// 	.email(validationRules.REGISTER.invalidEmailAddress),
	// password: z
	// 	.string()
	// 	.min(6, validationRules.REGISTER.passwordMin)
	// 	.max(30, validationRules.REGISTER.passwordMax)
	// 	.regex(new RegExp(".*[A-Z].*"), { message: validationRules.REGISTER.passwordUppercase })
	// 	.regex(new RegExp(".*\\d.*"), { message: validationRules.REGISTER.passwordWithNumber })
	// 	.regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
	// 		message: validationRules.REGISTER.passwordWithSpecialCharacter,
	// 	}),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
