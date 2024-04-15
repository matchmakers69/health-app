"use client";

import { NavbarDashboard } from "../NavbarDashboard";
import { DashboardFooterShape } from "./DashboardFooterShape";
import { type DashboardLayoutContentProps } from "./defs";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function DashboardLayoutContent({ children }: DashboardLayoutContentProps) {
	const { isSidebarInView } = useDashboardLayoutContext();

	return (
		<main
			className={`${!isSidebarInView ? "ml-0 w-full" : "md:ml-[26rem] md:w-[calc(100%-26rem)]"} dashboard relative h-full min-h-screen w-full grow overflow-y-auto bg-light-green transition-all`}
		>
			<div className="pl-[1.5rem] pr-[1.5rem] md:pl-[2rem] md:pr-[2rem]">
				<NavbarDashboard />
				<div className="py-[1.5rem] md:py-[2rem]">{children}</div>
			</div>

			<DashboardFooterShape />
		</main>
	);
}

export { DashboardLayoutContent };
