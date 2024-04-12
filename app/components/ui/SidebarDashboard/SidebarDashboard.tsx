import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { appLinkLabels } from "@/lib/appData";
import { signOut } from "@/auth";

function SidebarDashboard() {
	return (
		<Sidebar>
			<div className="sidebar-user-section border-footer-nav">
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<Button
						className="h-full w-full items-center justify-start px-0 py-[1.2rem] text-md text-text-light"
						variant="ghost"
						type="submit"
					>
						<i className="ri-logout-box-line mr-4 block" />
						{appLinkLabels.SIGN_OUT}
					</Button>
				</form>
			</div>
		</Sidebar>
	);
}

export { SidebarDashboard };
