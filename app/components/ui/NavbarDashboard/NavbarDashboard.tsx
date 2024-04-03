"use client";

import { useDashboardLayoutContext } from "@/app/context/DashboardLayoutContext";
import { useScrollHeader } from "@/app/hooks/useStickyHeader";

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
			className={`${isStickyHeader ? "shadow-lg" : "h-[7rem]"} border-bottom-nav text-dark-green sticky left-[0] top-[0] z-30 w-full py-[1.5rem] transition-all md:py-[2rem]`}
		>
			<nav className="relative z-10 flex h-full w-full items-center">
				<div className="site-header-left flex h-full flex-1 items-center">
					<button
						className="site-menu-toggle inline-flex h-full cursor-pointer items-center p-[1.5rem] pl-0 text-[14px] uppercase"
						onClick={handleToggleSidebar}
						type="button"
						aria-label="toggle sidebar"
					>
						<span className="site-menu-toggle-icon-dark mr-[0.8rem] inline-flex h-[1.5rem] w-[1.5rem] flex-col items-start" />
					</button>
				</div>
				<div className="site-header-right relative flex h-full flex-1 flex-wrap items-center justify-end">
					serach here
				</div>
			</nav>
		</header>
	);
}
