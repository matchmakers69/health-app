"use client";
import { useSession } from "next-auth/react";
import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { appLinkLabels } from "@/lib/appData";
import { logout } from "@/actions/signout";

function SidebarDashboard() {
	const { status } = useSession();
	const handleLogoutUser = () => {
		logout();
	};
	return (
		<Sidebar>
			<div className="sidebar-user-section border-footer-nav">
				<Button
					disabled={status === "loading" ? true : false}
					className="h-full w-full items-center justify-start px-0 py-[1.2rem] text-md text-text-light"
					variant="ghost"
					onClick={handleLogoutUser}
					type="button"
				>
					<i className="ri-logout-box-line mr-4 block" />
					{appLinkLabels.SIGN_OUT}
				</Button>
			</div>
		</Sidebar>
	);
}

export { SidebarDashboard };
