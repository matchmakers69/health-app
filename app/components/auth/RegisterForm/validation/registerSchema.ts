import { z } from "zod";

export const registerSchema = z.object({
	name: z.string().min(1, {
		message: "Name is required",
	}),
	email: z.string().min(1, { message: "Email is required" }).email("Invalid email address"),
	password: z
		.string()
		.min(6, "The password must be at least 6 characters long")
		.max(30, "The password must be a maximun 30 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
