"use client";

import Link from "next/link";
import { CloseSidebarButton } from "../../CloseSidebarButton/CloseSidebarButton";
import { Logo } from "../../Logo";
import { type SidebarProps } from "./defs";
import { routes } from "@/lib/routes";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function Sidebar({ children }: SidebarProps) {
	const { isSidebarInView, dispatch } = useDashboardLayoutContext();

	const handleCloseSidebar = () => {
		dispatch({
			type: "TOGGLE_SIDEBAR",
			payload: !isSidebarInView,
		});
	};
	return (
		<aside
			className={`${!isSidebarInView ? "-translate-x-full" : "translate-x-0"} sidebar-menu fixed left-0 top-0 z-50 flex h-full w-[30rem] flex-shrink-0 flex-col transition-transform`}
		>
			<div className="sidebar-inner flex h-full min-h-0 flex-1 flex-col bg-foreground-green px-[1.5rem] md:px-[2rem]">
				<div className="sidebar-content flex flex-1 flex-col overflow-y-auto pb-4">
					<header className="sidebar-header flex flex-col gap-6 pt-[2rem]">
						<div className="md:hidden">
							<CloseSidebarButton onClose={handleCloseSidebar} />
						</div>
						<div className="site-header-logo border-bottom-nav relative mb-[2rem] pb-[2rem]">
							<Link className="flex flex-col items-center justify-center" href={routes.HOME}>
								<Logo width={45} height={45} />
							</Link>
						</div>
					</header>
				</div>

				{children}
			</div>
		</aside>
	);
}

export { Sidebar };
