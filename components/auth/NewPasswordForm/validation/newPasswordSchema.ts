import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const newPasswordSchema = z.object({
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

export type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;
