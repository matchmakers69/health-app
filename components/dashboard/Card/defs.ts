import { type ReactNode } from "react";

export interface CardProps {
	variant?: string;
	extra?: string;
	className?: string;
	children: ReactNode;
}
