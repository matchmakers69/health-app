"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { type AppLayoutContextInit, type AppLayoutContextProps } from "./defs";

const AppLayoutContext = createContext<AppLayoutContextInit | null>(null);

export const AppLayoutContextProvider = ({ children }: AppLayoutContextProps) => {
	const [isNavInView, setIsNavInView] = useState(false);

	const handleOpenSidebarMenu = () => {
		setIsNavInView(true);
	};

	const handleCloseSidebarMenu = () => {
		setIsNavInView(false);
	};

	const value = useMemo(
		() => ({
			isNavInView,
			handleCloseSidebarMenu,
			handleOpenSidebarMenu,
		}),
		[isNavInView],
	);

	return <AppLayoutContext.Provider value={value}>{children}</AppLayoutContext.Provider>;
};

export const useAppLayoutContext = () => {
	const context = useContext(AppLayoutContext);

	if (!context) {
		throw new Error("Please make sure you wrapped by Provider");
	}

	return context;
};
