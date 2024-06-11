"use client";

import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";
import { useScrollHeader } from "@/hooks/useScrollHeader";

export function NavbarDashboard() {
	const isStickyHeader = useScrollHeader();
	const { isSidebarInView, dispatch } = useDashboardLayoutContext();

	const handleToggleSidebar = () => {
		dispatch({
			type: "TOGGLE_SIDEBAR",
			payload: !isSidebarInView,
		});
	};

	return (
		<header
			className={`${isStickyHeader ? "shadow-lg" : "h-[7rem]"} border-bottom-nav sticky left-[0] top-[0] z-30 w-full py-[1.5rem] text-dark-green transition-all md:py-[2rem]`}
		>
			<nav className="relative z-10 flex h-full w-full items-center">
				<div className="dashboard-header flex h-full flex-1 items-center">
					<button
						className="sidebar-menu-toggle-button border-r-gray-15 m-0 inline-flex h-full cursor-pointer items-center py-[1.5rem] pl-0 text-[1.4rem] uppercase focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground-green focus-visible:ring-offset-0 md:py-[20px]"
						onClick={handleToggleSidebar}
						type="button"
						aria-label="toggle dashboard sidebar"
					>
						<span className="site-menu-toggle-icon-dark mr-[1rem] inline-flex h-[1.5rem] w-[1.5rem] flex-col items-start" />
						{isSidebarInView ? "hide sidebar" : "show sidebar"}
					</button>
				</div>
				<div className="site-header-right relative flex h-full flex-1 flex-wrap items-center justify-end">
					serach here
				</div>
			</nav>
		</header>
	);
}
