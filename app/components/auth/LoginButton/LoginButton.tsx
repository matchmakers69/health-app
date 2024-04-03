"use client";

import { useRouter } from "next/navigation";
import { type LoginButtonProps } from "./defs";

export const LoginButton = ({ children }: LoginButtonProps) => {
	const router = useRouter();

	const handleRedirectToLoginPage = () => {
		router.push("/login");
	};
	return (
		<span onClick={handleRedirectToLoginPage} className="block cursor-pointer">
			{children}
		</span>
	);
};
