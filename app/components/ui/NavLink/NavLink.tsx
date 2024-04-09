"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLinkProps } from "./defs";
import { cn } from "@/lib/utils";

export const NavLink = ({ href, children, className, ...props }: NavLinkProps) => {
	const currentPath = usePathname();
	// const isActive = currentPath.includes(href.toString());
	const isActive = currentPath === href;

	return (
		<Link
			href={href}
			className={cn(
				"text text-[2rem] focus:outline-none focus:ring-1 focus-visible:ring-ring sm:text-[2.5rem] md:text-[3rem]",
				{
					className,
					"active-link relative inline-block": isActive,
					"text-text-light": !isActive,
				},
			)}
			{...props}
		>
			{children}
		</Link>
	);
};
