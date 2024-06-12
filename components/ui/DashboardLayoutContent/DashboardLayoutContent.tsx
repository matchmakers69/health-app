"use client";

import { NavbarDashboard } from "../NavbarDashboard";
import { DashboardFooterShape } from "./DashboardFooterShape";
import { type DashboardLayoutContentProps } from "./defs";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function DashboardLayoutContent({ children }: DashboardLayoutContentProps) {
	const { isSidebarInView } = useDashboardLayoutContext();

	return (
		<div className="flex min-h-full flex-auto flex-shrink-0 flex-col bg-light-grey antialiased">
			<div
				className={`flex-grow ${!isSidebarInView ? "ml-0 w-full" : "md:ml-[30rem] md:w-[calc(100%-30rem)]"} w-full overflow-y-auto transition-all`}
			>
				<div className="pb-[12rem] pl-[2rem] pr-[2rem] md:pl-[3rem] md:pr-[3rem]">
					<NavbarDashboard />
					<div className="py-[1.5rem] md:py-[2rem]">{children}</div>
				</div>
			</div>
			<footer className="relative">
				<DashboardFooterShape />
			</footer>
		</div>
	);
}

export { DashboardLayoutContent };
