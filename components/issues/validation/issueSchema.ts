import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const issueSchema = z.object({
	title: z
		.string()
		.min(2, { message: validationRules.ISSUES.titleMin })
		.max(30, { message: validationRules.ISSUES.titleMaxLength }),

	description: z
		.string()
		.min(10, { message: validationRules.ISSUES.descriptionMin })
		.max(500, { message: validationRules.ISSUES.descriptionMaxLength }),
});

export type IssuesFormValues = z.infer<typeof issueSchema>;
