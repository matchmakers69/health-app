"use client";

import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../Navbar";
import { NavSidebar } from "../NavSidebar";
import { type AppLayoutContentProps } from "./defs";
import Loading from "@/app/loading";
import { useAppLayoutContext } from "@/app/context/AppLayoutContext";

function AppLayoutContent({ children }: AppLayoutContentProps) {
	const { isNavInView } = useAppLayoutContext();
	return (
		<>
			<AnimatePresence initial={false}>{isNavInView && <NavSidebar />}</AnimatePresence>
			<Navbar />
			<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-grey pt-[80px]">
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</main>
		</>
	);
}

export { AppLayoutContent };
