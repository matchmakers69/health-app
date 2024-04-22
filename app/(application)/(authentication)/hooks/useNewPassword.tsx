import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import {
	newPasswordSchema,
	type NewPasswordFormValues,
} from "@/components/auth/NewPasswordForm/validation/newPasswordSchema";
import { newPassword } from "@/actions/new-password";

export const useNewPassword = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
	} = useForm<NewPasswordFormValues>({
		mode: "onSubmit",
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const handleNewPasswordSubmit: SubmitHandler<NewPasswordFormValues> = (values) => {
		setSuccess("");
		setError("");
		startTransition(() => {
			newPassword(values, token).then((data) => {
				if (data?.error) {
					reset();
					setError(data?.error);
				}

				if (data?.success) {
					reset();
					setSuccess(data.success);
				}
			});
		});
	};

	const newPasswordSubmit = handleSubmit(handleNewPasswordSubmit);

	return {
		newPasswordSubmit,
		register,
		errors,
		isDirty,
		isSubmitting,
		isPending,
		success,
		error,
	};
};
