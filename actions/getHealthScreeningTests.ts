"use server";

import { db } from "@/lib/db";

export default async function getHealthScreeningTests(userId: string) {
	try {
		const res = await db.healthScreeningResult.findMany({
			where: { ownerId: userId },
			orderBy: {
				issued_date: "desc",
			},
		});
		return res;
	} catch (error) {
		throw new Error("Cannot get health screening tests!");
	}
}
