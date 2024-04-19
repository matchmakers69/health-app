"use client";

import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { Input } from "../../ui/Input";
import { CardWrapper } from "../CardWrapper";
import { pagesText } from "@/lib/appData";
import { useResetPassword } from "@/app/(application)/(authentication)/hooks/useResetPassword";
import { routes } from "@/lib/routes";

export function ResetForm() {
	const { resetPasswordSubmit, register, errors, isDirty, isSubmitting, isPending, success, error } =
		useResetPassword();
	return (
		<CardWrapper
			headerLabel={pagesText.AUTH_PAGES.PASSWORD_RESET.forgotPassword}
			backButtonLabel={pagesText.AUTH_PAGES.PASSWORD_RESET.backButtonLabel}
			backButtonHref={routes.LOGIN}
		>
			<form autoComplete="off" noValidate onSubmit={resetPasswordSubmit}>
				<div className="mb-3 flex w-full flex-col gap-[3rem]">
					<Input
						type="email"
						className="w-full"
						placeholder="Email"
						{...register("email")}
						error={errors.email}
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
						{pagesText.AUTH_PAGES.PASSWORD_RESET.buttonSubmitReset}
					</Button>
				</div>
			</form>
		</CardWrapper>
	);
}
