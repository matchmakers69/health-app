"use client";

import { useRouter } from "next/navigation";
import { type LoginButtonProps } from "./defs";
import { routes } from "@/lib/routes";

export const LoginButton = ({ children }: LoginButtonProps) => {
	const router = useRouter();

	const handleRedirectToLoginPage = () => {
		router.push(routes.LOGIN);
	};
	return (
		<span onClick={handleRedirectToLoginPage} className="block cursor-pointer">
			{children}
		</span>
	);
};
