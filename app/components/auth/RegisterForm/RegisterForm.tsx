"use client";

import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { CardWrapper } from "../CardWrapper";
import { Input } from "../../ui/Input";
import { routes } from "@/lib/routes";
import { useRegister } from "@/app/(application)/(authentication)/hooks/useRegister";
import { pagesText } from "@/lib/appData";

export function RegisterForm() {
	const { submitRegister, register, errors, isDirty, isSubmitting, isPending, success, error } =
		useRegister();
	return (
		<CardWrapper
			headerLabel={pagesText.AUTH_PAGES.REGISTER.cardTitle}
			backButtonLabel={pagesText.AUTH_PAGES.REGISTER.cardTitle}
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
