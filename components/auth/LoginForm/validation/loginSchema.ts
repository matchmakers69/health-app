import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: validationRules.LOGIN.emailRequired })
		.email(validationRules.LOGIN.invalidEmailAddress),
	password: z.string().min(2, { message: validationRules.LOGIN.passwordMin }),
	code: z.optional(
		z
			.string()
			.min(6, { message: validationRules.LOGIN.codeMin })
			.max(6, { message: validationRules.LOGIN.codeMax })
			.refine((value) => /^\d+$/.test(value), {
				message: validationRules.LOGIN.invalidCodeFormat,
			}),
	),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
