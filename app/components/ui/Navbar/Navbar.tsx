"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "../Logo";
import { NavList } from "../NavList";
import { Button } from "../Button";
import { NavbarDropDownMenu } from "../NavbarDropDownMenu";
import Avatar from "@/public/avatar.jpg";
import { useScrollHeader } from "@/app/hooks/useStickyHeader";
import { appLinkLabels, headerLabels } from "@/lib/appData";
import { routes } from "@/lib/routes";
import { DropdownNavbarList } from "../DropdownNavbarList";

export function Navbar() {
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

	return (
		<header
			className={`${
				isStickyHeader ? "h-[70px] bg-[rgb(0,6,18)] shadow-lg" : "shadow-header h-[80px]"
			} fixed left-0 top-0 z-30 w-full text-text-light transition-all`}
		>
			<nav className="relative z-10 flex h-full w-full items-center">
				<div className="site-header-left flex h-full flex-1 items-center">
					<button
						className="sidebar-menu-toggle-button border-r-gray-15 inline-flex h-full cursor-pointer items-center p-[1.5rem] text-[14px] uppercase focus:outline-none focus:ring-1 focus:ring-sky-500 md:p-[20px]"
						onClick={handleOpenMenuSidebar}
						type="button"
						aria-label="toggle sidebar"
					>
						<span className="sidebar-menu-toggle-button-icon mr-[0.8rem] inline-flex h-[1.5rem] w-[1.5rem] flex-col items-start" />
						{headerLabels.MENU}
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
							<Link href={routes.LOGIN}>{appLinkLabels.LOGIN}</Link>
						</Button>
						<Button className="hidden uppercase md:flex" variant="outline" asChild size="sm">
							<Link href={routes.REGISTER}>{appLinkLabels.REGISTER}</Link>
						</Button>
					</div>
					<div className="pr-[1.5rem] md:pr-[20px]">
						<NavbarDropDownMenu
							button={<Image alt="avatar" src={Avatar} width="40" height="40" />}
							classNames="py-2 top-[4rem] -left-[15rem] min-w-[18rem] max-w-[30rem] w-full"
						>
							<div className="shadow-drop-down w-full overflow-hidden rounded-2xl bg-[rgba(255,255,255,.96)]">
								<div className="inner-drop-down flex flex-col items-start justify-between p-[1rem]">
									<DropdownNavbarList />
								</div>
							</div>
						</NavbarDropDownMenu>
					</div>
				</div>
			</nav>
			<AnimatePresence initial={false}>
				{isMenuOpened && <NavList onClose={handleCloseMenuSidebar} />}
			</AnimatePresence>
		</header>
	);
}
