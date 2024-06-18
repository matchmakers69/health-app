"use server";

import {
	type AddNewHealthScreenSchemaValues,
	addNewHealthScreenSchema,
} from "@/components/healthScreenings/validation/addNewHealthScreenSchema";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const addNewHealthScreen = async (values: AddNewHealthScreenSchemaValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: "Sorry you are not authorized" };
	}
	const validatedFields = addNewHealthScreenSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: "Something went wrong with validation" };
	}

	const { name, notes, file_name, signature, public_id, version } = validatedFields.data;

	await db.healthScreeningResult.create({
		data: {
			name,
			notes,
			file_name,
			signature,
			version,
			public_id,
			ownerId: user?.id,
		},
	});
	return { success: "Congrats! You added health screening test results!" };
};
