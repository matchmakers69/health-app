"use client";

import Link from "next/link";
import { Button } from "../../ui/Button";
import { type BackButtonProps } from "./defs";

export const BackButton = ({ href, label }: BackButtonProps) => {
	return (
		<Button variant="link" className="w-full font-normal focus-visible:ring-sky-500" size="sm" asChild>
			<Link href={href}>{label}</Link>
		</Button>
	);
};
