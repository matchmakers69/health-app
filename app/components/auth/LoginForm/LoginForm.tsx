"use client";

import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { Input } from "../../ui/Input";
import { CardWrapper } from "../CardWrapper";
import { useLogin } from "@/app/(application)/(authentication)/hooks/useLogin";

export function LoginForm() {
	const { submitLogin, register, errors, isDirty, isSubmitting, isPending, success, error } = useLogin();

	return (
		<CardWrapper backButtonLabel="Don't have an account?" backButtonHref="/register" showSocial>
			<form autoComplete="off" noValidate onSubmit={submitLogin}>
				<div className="mb-[4rem] flex w-full flex-col gap-[3rem]">
					<Input
						type="email"
						className="w-full"
						placeholder="Email"
						{...register("email")}
						error={errors.email}
					/>
					<Input
						className="w-full"
						type="password"
						placeholder="Password"
						{...register("password")}
						error={errors.password}
					/>
				</div>

				<div className="mb-8">
					<FormError message={error} />
					<FormSuccess message={success} />
				</div>
				<div className="mb-8">
					<Button
						type="submit"
						variant="default"
						size="lg"
						disabled={!isDirty || isSubmitting || isPending}
						className="w-full"
					>
						Sign in
					</Button>
				</div>
			</form>
		</CardWrapper>
	);
}
