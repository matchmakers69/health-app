"use client";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { settings } from "@/actions/settings";
import { settingsSchema, type SettingsFormValues } from "@/components/settings/validation/settingsSchema";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { FormError } from "@/components/ui/FormError";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCurrentUser } from "@/hooks/useCurrentUser";

function AccountForm() {
	const user = useCurrentUser();
	const { update } = useSession();
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isSubmitting },
		reset,
	} = useForm<SettingsFormValues>({
		resolver: zodResolver(settingsSchema, {}, { raw: true }),
		defaultValues: {
			password: undefined,
			newPassword: undefined,
			name: user?.name || undefined,
			email: user?.email || undefined,
		},
	});

	// Added due to the bug data is not loading straight away on refresh
	useEffect(() => {
		if (user) {
			reset({
				name: user.name || undefined,
				email: user.email || undefined,
				password: undefined,
				newPassword: undefined,
			});
		}
	}, [user, reset]);

	const handleSubmitUpdateAccount = (values: SettingsFormValues) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error);
					}
					if (data.success) {
						update();
						setSuccess(data.success);
					}
				})
				.catch(() => setError("Something went wrong!"));
		});
	};
	if (!user) return <div>Loading user...</div>;
	return (
		<>
			<form autoComplete="off" noValidate onSubmit={handleSubmit(handleSubmitUpdateAccount)}>
				<div className="mb-14 flex w-full flex-col gap-[3rem]">
					<Input
						label="Enter your name"
						type="text"
						className="w-full border-border-input-light bg-transparent focus:border-ring-dark focus:outline-none focus:ring-1 focus:ring-ring-dark"
						placeholder="Your name"
						{...register("name")}
						error={errors.name}
					/>

					{user.is0Auth === false && (
						<>
							<Input
								label="Enter your email"
								type="email"
								className="w-full border-border-input-light bg-transparent focus:border-ring-dark focus:outline-none focus:ring-1 focus:ring-ring-dark"
								placeholder="Your email"
								{...register("email")}
								error={errors.email}
							/>
							<Input
								label="Enter your password"
								type="password"
								className="w-full border-border-input-light bg-transparent focus:border-ring-dark focus:outline-none focus:ring-1 focus:ring-ring-dark"
								placeholder="******"
								{...register("password")}
								error={errors.password}
							/>

							<Input
								label="Enter new password"
								type="password"
								className="w-full border-border-input-light bg-transparent focus:border-ring-dark focus:outline-none focus:ring-1 focus:ring-ring-dark"
								placeholder="******"
								{...register("newPassword")}
								error={errors.newPassword}
							/>
						</>
					)}
				</div>
				<div className="mb-8">
					<FormError message={error} />
					<FormSuccess message={success} />
				</div>
				<div className="mb-8">
					<Button
						type="submit"
						size="lg"
						disabled={!isDirty || isSubmitting || isPending}
						className="w-full bg-dark-green text-white"
					>
						Update
					</Button>
				</div>
			</form>
		</>
	);
}

export { AccountForm };
