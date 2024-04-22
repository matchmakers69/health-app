"use client";

import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { Input } from "../../ui/Input";
import { CardWrapper } from "../CardWrapper";
import { useNewPassword } from "@/app/(application)/(authentication)/hooks/useNewPassword";
import { pagesText } from "@/lib/appData";
import { routes } from "@/lib/routes";

export function NewPasswordForm() {
	const { newPasswordSubmit, register, errors, isDirty, isSubmitting, isPending, success, error } =
		useNewPassword();

	return (
		<CardWrapper
			headerLabel={pagesText.AUTH_PAGES.NEW_PASSWORD.newPasswordCardTitle}
			backButtonLabel={pagesText.AUTH_PAGES.PASSWORD_RESET.backButtonLabel}
			backButtonHref={routes.LOGIN}
		>
			<form autoComplete="off" noValidate onSubmit={newPasswordSubmit}>
				<div className="mb-3 flex w-full flex-col gap-[3rem]">
					<Input
						type="password"
						className="w-full"
						placeholder="******"
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
						{pagesText.AUTH_PAGES.NEW_PASSWORD.buttonSubmitResetPassword}
					</Button>
				</div>
			</form>
		</CardWrapper>
	);
}
