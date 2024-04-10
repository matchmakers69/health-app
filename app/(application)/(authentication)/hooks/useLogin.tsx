import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { login } from "@/app/actions/login";
import { type LoginFormValues, loginSchema } from "@/app/components/auth/LoginForm/validation/loginSchema";
import { pagesText } from "@/lib/appData";

export const useLogin = () => {
	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const searchParams = useSearchParams();
	const urlError =
		searchParams.get("error") === "OAuthAccountNotLinked"
			? `${pagesText.AUTH_PAGES.ERROR.OAuthAccountError}`
			: "";
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
	} = useForm<LoginFormValues>({
		mode: "onSubmit",
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleLoginSubmit: SubmitHandler<LoginFormValues> = (values) => {
		setSuccess("");
		setError("");
		startTransition(() => {
			login(values).then((data) => {
				if (data?.error) {
					reset();
					setError(data?.error);
				}
				reset();

				// TODO fix when existing user checked
				// if (data?.success) {
				// 	reset();
				// 	setSuccess(data.success);
				// }
			});
		});
	};

	const submitLogin = handleSubmit(handleLoginSubmit);

	return {
		submitLogin,
		register,
		errors,
		isDirty,
		isSubmitting,
		isPending,
		success,
		error,
		urlError,
	};
};
