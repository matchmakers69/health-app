import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const resetSchema = z.object({
	email: z
		.string()
		.min(1, { message: validationRules.RESET_PASSWORD.emailRequired })
		.email(validationRules.RESET_PASSWORD.invalidEmailAddress),
});

export type ResetFormValues = z.infer<typeof resetSchema>;
