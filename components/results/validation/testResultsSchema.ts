import { z } from "zod";
import { validationRules } from "@/lib/appData";

const numberOrEmptyString = z.preprocess((val) => {
	if (typeof val === "string" && val === "") {
		return undefined; // Convert empty string to undefined
	}
	if (typeof val === "number" && isNaN(val)) {
		return undefined; // Convert NaN to undefined
	}
	return val;
}, z.number().nullable().optional());

export const testResultsSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: validationRules.TEST_RESULTS.nameMin })
			.max(30, { message: validationRules.TEST_RESULTS.nameMaxLength }),

		description: z
			.string()
			.min(10, { message: validationRules.TEST_RESULTS.descriptionMin })
			.max(500, { message: validationRules.TEST_RESULTS.descriptionMaxLength }),
		attachFile: z.boolean().optional(),
		file_name: z.string().nullable().optional(),
		version: numberOrEmptyString,
		signature: z.string().nullable().optional(),
		public_id: z.string().nullable().optional(),
	})
	.superRefine((values, ctx) => {
		if (values.attachFile) {
			if (!values.file_name) {
				ctx.addIssue({
					path: ["file_name"],
					message: validationRules.TEST_RESULTS.file_nameRequired,
					code: "custom",
				});
			}
			if (values.version === null || values.version === undefined) {
				ctx.addIssue({
					path: ["version"],
					message: validationRules.TEST_RESULTS.versionRequired,
					code: "custom",
				});
			}
			if (!values.signature) {
				ctx.addIssue({
					path: ["signature"],
					message: validationRules.TEST_RESULTS.signatureRequired,
					code: "custom",
				});
			}
			if (!values.public_id) {
				ctx.addIssue({
					path: ["public_id"],
					message: validationRules.TEST_RESULTS.public_idRequired,
					code: "custom",
				});
			}
		}
	});

export type TestResultsFormValues = z.infer<typeof testResultsSchema>;
