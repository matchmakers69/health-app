import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const registerSchema = z.object({
	name: z
		.string()
		.min(2, { message: validationRules.REGISTER.nameRequired })
		.max(30, { message: validationRules.REGISTER.nameMaxLength })
		.refine(
			(value) => {
				// Check if the name contains only one space between words
				return /^\s*\S+(\s+\S+)*\s*$/.test(value);
			},
			{ message: validationRules.REGISTER.nameOneSpace },
		),
	email: z
		.string()
		.min(1, { message: validationRules.REGISTER.emailRequired })
		.email(validationRules.REGISTER.invalidEmailAddress),
	password: z
		.string()
		.min(6, validationRules.REGISTER.passwordMin)
		.max(30, validationRules.REGISTER.passwordMax)
		.regex(new RegExp(".*[A-Z].*"), { message: validationRules.REGISTER.passwordUppercase })
		.regex(new RegExp(".*\\d.*"), { message: validationRules.REGISTER.passwordWithNumber })
		.regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
			message: validationRules.REGISTER.passwordWithSpecialCharacter,
		}),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
