"use client";

import { Card } from "../../ui/Card";
import { CardContent } from "../../ui/Card/CardContent";
import { CardFooter } from "../../ui/Card/CardFooter";
import { CardHeader } from "../../ui/Card/CardHeader";
import { Header } from "../../ui/Card/Header";
import { BackButton } from "../BackButton";
import { Social } from "../Social";
import { type CardWrapperProps } from "./defs";

export const CardWrapper = ({
	children,
	headerLabel = "",
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="mx-auto w-full max-w-[38rem] sm:max-w-[50rem] md:max-w-[60rem] lg:max-w-[70rem]">
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent className="mb-6">{children}</CardContent>
			{showSocial && (
				<CardFooter className="mb-6">
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton label={backButtonLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	);
};
