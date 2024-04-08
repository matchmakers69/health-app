"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../Button";

export const FooterAuth = () => {
	const router = useRouter();
	const pathname = usePathname();
	const isLoginPage = pathname === "/login";

	const handleRedirectByUrl = () => {
		if (isLoginPage) {
			router.push("/register");
		} else {
			router.push("/login");
		}
	};

	return (
		<footer className="bg-blue-900 text-center text-white">
			<div className="container mx-auto p-6">
				<div className="">
					<span className="flex w-full items-center justify-center">
						<span className="mr-4">{isLoginPage ? "Register for free" : "Please login"}</span>

						<Button
							onClick={handleRedirectByUrl}
							type="button"
							className="inline-block rounded-full border-2 border-neutral-50 bg-transparent px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
						>
							{isLoginPage ? "Sign up!" : "Sign in!"}
						</Button>
					</span>
				</div>
			</div>

			{/* <!--Copyright section--> */}
			<div className="bg-black bg-opacity-20 p-4 text-center">© 2024 Copyright: Przemek Lewtak</div>
		</footer>
	);
};
