"use client";

import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { CardWrapper } from "../CardWrapper";
import { Input } from "../../ui/Input";
import { useRegister } from "@/app/(application)/(auth)/hooks/useRegister";
import { routes } from "@/lib/routes";

export function RegisterForm() {
	const { submitRegister, register, errors, isDirty, isSubmitting, isPending, success, error } =
		useRegister();
	return (
		<CardWrapper
			headerLabel="Fill in your details below and click Register to create an account:"
			backButtonLabel="Already have an account?"
			backButtonHref={routes.LOGIN}
			showSocial
		>
			<form autoComplete="off" noValidate onSubmit={submitRegister}>
				<div className="mb-[4rem] flex w-full flex-col gap-[3rem]">
					<Input
						type="text"
						className="w-full"
						placeholder="Name"
						{...register("name")}
						error={errors.name}
					/>
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

				<div className="mb-3">
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
						Register
					</Button>
				</div>
			</form>
		</CardWrapper>
	);
}
