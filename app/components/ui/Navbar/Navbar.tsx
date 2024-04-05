"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "../Logo";
import { NavList } from "../NavList";
import { Button } from "../Button";
import { useScrollHeader } from "@/app/hooks/useStickyHeader";

export function Navbar() {
	const router = useRouter();
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const isStickyHeader = useScrollHeader();

	const handleOpenMenuSidebar = () => {
		setIsMenuOpened(true);
	};

	const handleCloseMenuSidebar = () => {
		setIsMenuOpened(false);
	};

	const pathname = usePathname();

	const handleRedirentToMyAccount = () => {
		router.push("/dashboard");
	};

	useEffect(() => {
		if (isMenuOpened) setIsMenuOpened(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	// shadow-header fixed top-0 z-[500] h-[80px] w-full

	return (
		<header
			className={`${
				isStickyHeader ? "h-[70px] bg-[rgb(0,6,18)] shadow-lg" : "shadow-header h-[80px]"
			} fixed left-0 top-0 z-30 w-full text-text-light transition-all`}
		>
			<nav className="relative z-10 flex h-full w-full items-center">
				<div className="site-header-left flex h-full flex-1 items-center">
					<button
						className="site-menu-toggle border-r-gray-15 inline-flex h-full cursor-pointer items-center p-[1.5rem] text-[14px] uppercase md:p-[20px]"
						onClick={handleOpenMenuSidebar}
						type="button"
						aria-label="toggle sidebar"
					>
						<span className="site-menu-toggle-icon mr-[0.8rem] inline-flex h-[1.5rem] w-[1.5rem] flex-col items-start" />
						menu
					</button>
				</div>
				<div className="site-header-logo relative">
					<Link className="flex flex-col items-center justify-center" href="/">
						<Logo width={45} height={45} />
					</Link>
				</div>
				<div className="site-header-right relative flex h-full flex-1 flex-wrap items-center justify-end">
					<Button
						aria-label="My account link"
						onClick={handleRedirentToMyAccount}
						type="button"
						variant="link"
						className="flex items-center text-[1.4rem] uppercase hover:no-underline"
					>
						<i className="ri-account-circle-line text-text-light no-underline"></i>

						<span className="link-text ml-2 hidden text-inherit lg:block">My account</span>
					</Button>
					<div className="auth-buttons-wrapper flex items-center gap-6 pr-[1rem] md:pr-[20px]">
						<Button className="hidden uppercase md:flex" variant="default" asChild size="sm">
							<Link href="/login">Login</Link>
						</Button>
						<Button className="hidden uppercase md:flex" variant="outline" asChild size="sm">
							<Link href="/register">Register</Link>
						</Button>
					</div>
				</div>
			</nav>
			<AnimatePresence mode="wait" initial={false}>
				{isMenuOpened && <NavList onClose={handleCloseMenuSidebar} />}
			</AnimatePresence>
		</header>
	);
}
