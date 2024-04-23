"use client";

import { NavbarDashboard } from "../NavbarDashboard";
import { DashboardFooterShape } from "./DashboardFooterShape";
import { type DashboardLayoutContentProps } from "./defs";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function DashboardLayoutContent({ children }: DashboardLayoutContentProps) {
	const { isSidebarInView } = useDashboardLayoutContext();

	return (
		<main className="flex min-h-screen flex-col">
			<div
				className={`flex-grow ${!isSidebarInView ? "ml-0 w-full" : "md:ml-[26rem] md:w-[calc(100%-26rem)]"} w-full overflow-y-auto bg-light-green transition-all`}
			>
				<div className="pb-[12rem] pl-[1.5rem] pr-[1.5rem] md:pl-[2rem] md:pr-[2rem]">
					<NavbarDashboard />
					<div className="py-[1.5rem] md:py-[2rem]">{children}</div>
				</div>
			</div>
			<footer className="relative">
				<DashboardFooterShape />
			</footer>
		</main>
	);
}

export { DashboardLayoutContent };
