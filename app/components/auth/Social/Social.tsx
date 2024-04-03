/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "../../ui/Button";

export const Social = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");

	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: callbackUrl ?? "/",
		});
	};

	return (
		<>
			<Button size="lg" className="w-full" variant="secondary" onClick={() => onClick("google")}>
				<span className="mr-2 block">Google</span>
				<i className="ri-google-fill text-[2.5rem]"></i>
			</Button>
			<Button size="lg" className="w-full" variant="secondary" onClick={() => onClick("github")}>
				<span className="mr-2 block">Github</span>
				<i className="ri-github-fill text-[2.5rem]"></i>
			</Button>
		</>
	);
};
