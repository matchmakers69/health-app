"use client";

import Link from "next/link";
import { Button } from "../../ui/Button";
import { FormError } from "../../ui/FormError";
import { FormSuccess } from "../../ui/FormSuccess";
import { Input } from "../../ui/Input";
import { CardWrapper } from "../CardWrapper";
import { pagesText } from "@/lib/appData";
import { useLogin } from "@/app/(application)/(authentication)/hooks/useLogin";
import { routes } from "@/lib/routes";

export function LoginForm() {
	const { submitLogin, register, errors, isDirty, isSubmitting, isPending, success, error, urlError } =
		useLogin();
	return (
		<CardWrapper
			backButtonLabel={pagesText.AUTH_PAGES.LOGIN.noAccountText}
			backButtonHref={routes.REGISTER}
			showSocial
		>
			<form autoComplete="off" noValidate onSubmit={submitLogin}>
				<div className="mb-3 flex w-full flex-col gap-[3rem]">
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
				<div className="mb-8 text-center">
					<Button className="px-0 font-normal" asChild variant="link">
						<Link href={routes.PASSWORD_RESET}>{pagesText.AUTH_PAGES.LOGIN.forgotPasswordButtonLabel}</Link>
					</Button>
				</div>
				<div className="mb-8">
					<FormError message={error || urlError} />
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
						{pagesText.AUTH_PAGES.LOGIN.signInButton}
					</Button>
				</div>
			</form>
		</CardWrapper>
	);
}
