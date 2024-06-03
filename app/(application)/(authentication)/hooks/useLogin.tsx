import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { pagesText } from "@/lib/appData";
import { login } from "@/actions/login";
import { type LoginFormValues, loginSchema } from "@/components/auth/LoginForm/validation/loginSchema";

export const useLogin = () => {
	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [showTwoFactor, setShowTwoFactor] = useState(false);

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
		defaultValues: {},
	});

	const handleLoginSubmit: SubmitHandler<LoginFormValues> = (values) => {
		setSuccess("");
		setError("");
		startTransition(() => {
			login(values)
				.then((data) => {
					if (data?.error) {
						setShowTwoFactor(false);
						reset();
						setError(data?.error);
					}

					if (data?.success) {
						reset();
						setSuccess(data.success);
					}
					if (data?.twoFactor) {
						setShowTwoFactor(true);
					}
				})
				.catch(() => {
					setError(pagesText.AUTH_PAGES.LOGIN.loginFormError);
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
		showTwoFactor,
	};
};
