"use client";
import { useState, useTransition } from "react";
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
	} = useForm<SettingsFormValues>({
		mode: "onSubmit",
		resolver: zodResolver(settingsSchema),
		defaultValues: {
			name: user?.name || undefined,
		},
	});

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
	return (
		<form autoComplete="off" noValidate onSubmit={handleSubmit(handleSubmitUpdateAccount)}>
			<div className="mb-3 flex w-full flex-col gap-[3rem]">
				<Input
					type="text"
					className="border-border-input-light bg- focus:border-ring-dark focus:ring-ring-dark w-full focus:outline-none focus:ring-1"
					placeholder="Enter your name"
					{...register("name")}
					error={errors.name}
				/>
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
	);
}

export { AccountForm };
