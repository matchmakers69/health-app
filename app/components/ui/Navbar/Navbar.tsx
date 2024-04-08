"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "../Logo";
import { NavList } from "../NavList";
import { Button } from "../Button";
import NavbarDropDownMenu from "../NavbarDropDownMenu/NavbarDropDownMenu";
import Avatar from "@/public/avatar.jpg";
import { useScrollHeader } from "@/app/hooks/useStickyHeader";

export function Navbar() {
	// const router = useRouter();
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const isStickyHeader = useScrollHeader();

	const handleOpenMenuSidebar = () => {
		setIsMenuOpened(true);
	};

	const handleCloseMenuSidebar = () => {
		setIsMenuOpened(false);
	};

	const pathname = usePathname();

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
					<div className="auth-buttons-wrapper flex items-center gap-6 pr-[1.5rem] md:pr-[20px]">
						<Button className="hidden uppercase md:flex" variant="default" asChild size="sm">
							<Link href="/login">Login</Link>
						</Button>
						<Button className="hidden uppercase md:flex" variant="outline" asChild size="sm">
							<Link href="/register">Register</Link>
						</Button>
					</div>
					<div className="pr-[1.5rem] md:pr-[20px]">
						<NavbarDropDownMenu
							button={<Image alt="avatar" src={Avatar} width="40" height="40" />}
							classNames="py-2 top-[4rem] -left-[15rem] min-w-[18rem] max-w-[30rem] w-full"
						>
							<div className="shadow-drop-down w-full overflow-hidden rounded-2xl bg-[rgba(255,255,255,.96)]">
								<div className="inner-drop-down flex flex-col items-start justify-between p-[1rem]">
									<ul className="drop-down-list w-full">
										<li className="w-full">
											<Link
												className="flex w-full flex-col justify-start px-[1.2rem] py-[1rem] text-[1.6rem] text-navy transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
												href="/dashboard"
											>
												Dashboard
											</Link>
										</li>
										<li className="w-full">
											<Link
												className="flex w-full flex-col justify-start px-[1.2rem] py-[1rem] text-[1.6rem] text-navy transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
												href="/dashboard"
											>
												Logout
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</NavbarDropDownMenu>
					</div>
				</div>
			</nav>
			<AnimatePresence mode="wait" initial={false}>
				{isMenuOpened && <NavList onClose={handleCloseMenuSidebar} />}
			</AnimatePresence>
		</header>
	);
}
