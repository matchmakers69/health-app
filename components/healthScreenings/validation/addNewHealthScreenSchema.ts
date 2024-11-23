import { z } from "zod";
import { validationRules } from "@/lib/appData";

const currentYear = new Date().getFullYear();
const minYear = 1900;

const dateSchema = z
	.date({
		errorMap: (issue, { defaultError }) => ({
			message: issue.code === "invalid_date" ? "Date format is required" : defaultError,
		}),
	})
	.nullable()
	.refine((val) => val !== null, {
		message: "Date is required",
	})
	.refine(
		(val) => {
			if (val === null) return false;
			const year = val.getFullYear();
			return year >= minYear && year <= currentYear;
		},
		{
			message: `Year must be between ${minYear} and ${currentYear}`,
		},
	);

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

		date_issued: dateSchema,
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
