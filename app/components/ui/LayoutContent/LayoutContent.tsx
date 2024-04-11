"use client";

import { AnimatePresence } from "framer-motion";
import { NavSidebar } from "../NavSidebar";
import { type LayoutContentProps } from "./defs";
import { useAppLayoutContext } from "@/app/context/AppLayoutContext";

function LayoutContent({ children }: LayoutContentProps) {
	const { isNavInView } = useAppLayoutContext();
	return (
		<>
			<AnimatePresence initial={false}>{isNavInView && <NavSidebar />}</AnimatePresence>
			{children}
		</>
	);
}

export { LayoutContent };
