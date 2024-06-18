import { type Dispatch, type ReactNode } from "react";

export interface DashboardLayoutContextProps {
	children: ReactNode;
}

export interface DashboardLayoutContextState {
	isSidebarInView: boolean;
	isModalInView: boolean;
}

export type DashboardLayoutContextAction =
	| { type: "TOGGLE_SIDEBAR"; payload: boolean }
	| {
			type: "TOGGLE_CONTENT_SIDEBAR";
			payload: boolean;
	  }
	| { type: "OPEN_MODAL"; payload: boolean }
	| { type: "CLOSE_MODAL"; payload: boolean };

export interface DashboardLayoutContextInit {
	isSidebarInView: boolean;
	isModalInView: boolean;
	dispatch: Dispatch<DashboardLayoutContextAction>;
}
