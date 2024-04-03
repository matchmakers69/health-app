import { type Dispatch, type ReactNode } from "react";

export interface DashboardLayoutContextProps {
	children: ReactNode;
}

export interface DashboardLayoutContextState {
	isSidebarInView: boolean;
}

export type DashboardLayoutContextAction =
	| { type: "TOGGLE_SIDEBAR"; payload: boolean }
	| {
			type: "TOGGLE_CONTENT_SIDEBAR";
			payload: boolean;
	  };

export interface DashboardLayoutContextInit {
	isSidebarInView: boolean;
	dispatch: Dispatch<DashboardLayoutContextAction>;
}
