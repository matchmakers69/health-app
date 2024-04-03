import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().min(1, { message: "Email is required" }).email("Invalid email address"),
	password: z.string().min(1, { message: "Password must be at least 1 character" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
