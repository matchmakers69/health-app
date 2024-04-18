"use client";

import { BeatLoader } from "react-spinners";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "../CardWrapper";
import { actionMessages, pagesText } from "@/lib/appData";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { FormError } from "@/components/ui/FormError";

function NewVerificationForm() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		if (success || error) return;
		if (!token) {
			setError(actionMessages.VERIFICATION.missingToken);
			return;
		}
		newVerification(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError(actionMessages.VERIFICATION.errorMsg);
			});
	}, [error, success, token]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<CardWrapper
			backButtonLabel={pagesText.AUTH_PAGES.VERIFICATION.backButtonLabel}
			backButtonHref={pagesText.AUTH_PAGES.VERIFICATION.backButtonHref}
		>
			<div className="flex w-full items-center justify-center">
				{!success && !error && <BeatLoader />}
				<FormSuccess message={success} />
				{/* // TODO be aware error may show up despite user's email is verified - should be fixed on production */}
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	);
}

export { NewVerificationForm };
