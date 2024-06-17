"use server";

import {
	type TestResultsFormValues,
	testResultsSchema,
} from "@/components/results/validation/testResultsSchema";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const createTestResult = async (values: TestResultsFormValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: "Sorry you are not authorized" };
	}
	const validatedFields = testResultsSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: "Something went wrong with validation" };
	}

	const { name, description, file_name, signature, public_id, version } = validatedFields.data;

	await db.testResult.create({
		data: {
			name,
			description,
			file_name,
			signature,
			version,
			public_id,
			ownerId: user?.id,
		},
	});
	return { success: "Test result created!" };
};
