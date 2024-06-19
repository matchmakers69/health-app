import { z } from "zod";
import { validationRules } from "@/lib/appData";

export const addNewHealthScreenSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: validationRules.TEST_RESULTS.nameMin })
			.max(30, { message: validationRules.TEST_RESULTS.nameMaxLength }),

		notes: z
			.string()
			.min(10, { message: validationRules.TEST_RESULTS.noteMin })
			.max(500, { message: validationRules.TEST_RESULTS.noteMaxLength }),
		attachFile: z.boolean().optional(),
		secure_url: z.string().nullable().optional(),
		format: z.string().nullable().optional(),
	})
	.superRefine((values, ctx) => {
		if (values.attachFile) {
			if (values.secure_url === null || values.secure_url === undefined) {
				ctx.addIssue({
					path: ["secure_url"],
					message: validationRules.TEST_RESULTS.urlRequired,
					code: "custom",
				});
			}
			if (values.format === null || values.format === undefined) {
				ctx.addIssue({
					path: ["format"],
					message: validationRules.TEST_RESULTS.formatRequired,
					code: "custom",
				});
			}
		}
	});

export type AddNewHealthScreenSchemaValues = z.infer<typeof addNewHealthScreenSchema>;
