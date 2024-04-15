"use client";

import { useSession } from "next-auth/react";
import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { appLinkLabels } from "@/lib/appData";
import { logout } from "@/app/actions/signout";

function SidebarDashboard() {
	const { status } = useSession();
	return (
		<Sidebar>
			<div className="sidebar-user-section border-footer-nav">
				{status === "loading" ? (
					<span>Loading...</span>
				) : (
					<form action={logout}>
						<Button
							className="h-full w-full items-center justify-start px-0 py-[1.2rem] text-md text-text-light"
							variant="ghost"
							type="submit"
						>
							<i className="ri-logout-box-line mr-4 block" />
							{appLinkLabels.SIGN_OUT}
						</Button>
					</form>
				)}
			</div>
		</Sidebar>
	);
}

export { SidebarDashboard };
