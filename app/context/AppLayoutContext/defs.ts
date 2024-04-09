import { type ReactNode } from "react";

export interface AppLayoutContextProps {
	children: ReactNode;
}

export interface AppLayoutContextInit {
	isNavInView: boolean;
	handleCloseSidebarMenu: () => void;
	handleOpenSidebarMenu: () => void;
	handleClickOutside: () => void;
}
