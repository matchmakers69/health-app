"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import { type DashboardLayoutContextProps, type DashboardLayoutContextInit } from "./defs";
import { reducer } from "./reducers/dashboardLayoutReducer";

const DashboardLayoutContext = createContext<DashboardLayoutContextInit | null>(null);

const initialState = {
	isSidebarInView: true,
};

export const DashboardLayoutContextProvider = ({ children }: DashboardLayoutContextProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = useMemo(
		() => ({
			...state,
			dispatch,
		}),
		[state],
	);

	return <DashboardLayoutContext.Provider value={value}>{children}</DashboardLayoutContext.Provider>;
};

export const useDashboardLayoutContext = () => {
	const context = useContext(DashboardLayoutContext);
	if (!context) {
		throw new Error("Please make sure you wrapped by Provider");
	}

	return context;
};
