/* eslint-disable @typescript-eslint/no-floating-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { register as registerUser } from "@/actions/register";
import {
	type RegisterFormValues,
	registerSchema,
} from "@/components/auth/RegisterForm/validation/registerSchema";

export const useRegister = () => {
	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
	} = useForm<RegisterFormValues>({
		mode: "onSubmit",
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const handleRegisterSubmit: SubmitHandler<RegisterFormValues> = (data) => {
		setSuccess("");
		setError("");
		startTransition(() => {
			registerUser(data).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
			reset();
		});
	};

	const submitRegister = handleSubmit(handleRegisterSubmit);

	return {
		submitRegister,
		register,
		errors,
		isDirty,
		isSubmitting,
		isPending,
		success,
		error,
	};
};
