"use client";

import Link from "next/link";
import { Button } from "../Button";
import { type DropdownNavbarListProps } from "./defs";
import { appLinkLabels } from "@/lib/appData";
import { logout } from "@/actions/signout";

function DropdownNavbarList({ dropDownList }: DropdownNavbarListProps) {
	const handleSignOut = async () => {
		await logout();
	};
	return (
		<ul className="drop-down-list w-full">
			{dropDownList.map((dropDownLink) => {
				if (dropDownLink.label === appLinkLabels.SIGN_OUT) {
					return (
						<li
							key={dropDownLink.id}
							className="h-[4.5rem] w-full transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
						>
							<Button
								className="flex h-full w-full flex-col items-start justify-center px-[1.2rem] py-0  text-[1.6rem] font-normal text-navy focus:outline-none focus:ring-1 focus-visible:ring-ring"
								variant="ghost"
								onClick={handleSignOut}
								type="button"
							>
								{appLinkLabels.SIGN_OUT}
							</Button>
						</li>
					);
				}
				return (
					<li
						key={dropDownLink.id}
						className="h-[4.5rem] w-full transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
					>
						<Button
							className="flex h-full w-full flex-col items-start justify-center px-[1.2rem] py-0  text-[1.6rem] font-normal text-navy focus:outline-none focus:ring-1 focus-visible:ring-ring"
							variant="ghost"
							type="button"
							asChild
						>
							<Link href={dropDownLink.href}>{dropDownLink.label}</Link>
						</Button>
					</li>
				);
			})}
		</ul>
	);
}

export { DropdownNavbarList };
