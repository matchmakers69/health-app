import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getVerificationTokenByEmail } from "@/data/verification-token";

export const generateVerificationToken = async (email: string) => {
	const token = uuidv4();
	const expires = new Date(new Date().getTime() + 3600 * 1000); // token will expire in one hour

	const existingToken = await getVerificationTokenByEmail(email);
	if (existingToken) {
		// if there is already token in database we will remove it
		await db.verificationToken.delete({
			where: {
				id: existingToken.id,
			},
		});
	}

	const verificationtoken = await db.verificationToken.create({
		data: {
			email,
			token,
			expires,
		},
	});

	return verificationtoken;
};
