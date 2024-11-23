"use server";

import { revalidatePath } from "next/cache";
import {
	type AddNewHealthScreenSchemaValues,
	addNewHealthScreenSchema,
} from "@/components/healthScreenings/validation/addNewHealthScreenSchema";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { routes } from "@/lib/routes";

export const createHealthScreeningTest = async (payload: AddNewHealthScreenSchemaValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: "Sorry you are not authorized" };
	}

	try {
		const validatedFields = addNewHealthScreenSchema.safeParse(payload);
		if (!validatedFields.success) {
			return { error: "Something went wrong with validation" };
		}

		await db.healthScreeningResult.create({
			data: {
				name: validatedFields.data.name,
				issued_date: new Date(validatedFields.data.date_issued), // Convert to Date here
				notes: validatedFields.data.notes,
				secure_url: validatedFields.data.secure_url,
				format: validatedFields.data.format,
				ownerId: user.id,
			},
		});

		revalidatePath(`${routes.MY_HEALTH_SCREENINGS}`);

		return { success: "Congrats! You added health screening test results!" };
	} catch (error) {
		console.error("Error creating health screening test:", error);
		return { error: "Something went wrong!" };
	}
};
