import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { type ResetFormValues, resetSchema } from "@/components/auth/ResetForm/validation/resetSchema";
import { resetPassword } from "@/actions/resetPassword";

export const useResetPassword = () => {
	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
	} = useForm<ResetFormValues>({
		mode: "onSubmit",
		resolver: zodResolver(resetSchema),
		defaultValues: {
			email: "",
		},
	});

	const handleResetPasswordSubmit: SubmitHandler<ResetFormValues> = (values) => {
		setSuccess("");
		setError("");
		startTransition(() => {
			resetPassword(values).then((data) => {
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

	const resetPasswordSubmit = handleSubmit(handleResetPasswordSubmit);

	return {
		resetPasswordSubmit,
		register,
		errors,
		isDirty,
		isSubmitting,
		isPending,
		success,
		error,
	};
};
