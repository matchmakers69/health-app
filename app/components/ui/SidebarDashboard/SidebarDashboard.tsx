import { Button } from "../Button";
import { Sidebar } from "./Sidebar";
import { signOut } from "@/auth";

function SidebarDashboard() {
	return (
		<Sidebar>
			<div className="sidebar-user-section border-footer-nav py-[1.5rem]">
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<Button className="w-full bg-primary-foreground uppercase text-navy" variant="default" size="sm">
						Logout
					</Button>
				</form>
			</div>
		</Sidebar>
	);
}

export { SidebarDashboard };
