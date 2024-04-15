"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import { Logo } from "../../Logo";
import { type HeaderProps } from "./defs";
import { headerLabels } from "@/lib/appData";
import { useAppLayoutContext } from "@/context/AppLayoutContext";
import { useScrollHeader } from "@/hooks/useScrollHeader";

function Header({ children }: HeaderProps) {
	const { isNavInView, handleCloseSidebarMenu, handleOpenSidebarMenu } = useAppLayoutContext();
	const isStickyHeader = useScrollHeader();

	const pathname = usePathname();

	useEffect(() => {
		if (isNavInView) handleCloseSidebarMenu();
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
						onClick={handleOpenSidebarMenu}
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
				{children}
			</nav>
		</header>
	);
}

export { Header };
