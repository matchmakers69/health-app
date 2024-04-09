"use client";

import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../Navbar";
import { NavSidebar } from "../NavSidebar";
import { type MarketingLayoutContentProps } from "./defs";
import Loading from "@/app/loading";
import { useAppLayoutContext } from "@/app/context/AppLayoutContext";

function MarketingLayoutContent({ children }: MarketingLayoutContentProps) {
	const { isNavInView } = useAppLayoutContext();

	return (
		<>
			<AnimatePresence initial={false}>{isNavInView && <NavSidebar />}</AnimatePresence>
			<Navbar />
			<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-purple pt-[80px]">
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</main>
		</>
	);
}

export { MarketingLayoutContent };
