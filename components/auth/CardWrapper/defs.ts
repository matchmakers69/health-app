import { type ReactNode } from "react";

export interface CardWrapperProps {
	children: ReactNode;
	headerLabel?: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}
