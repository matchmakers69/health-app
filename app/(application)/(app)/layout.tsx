import { DashboardLayoutContent } from "@/app/components/ui/DashboardLayoutContent";
import { SidebarDashboard } from "@/app/components/ui/SidebarDashboard";
import { DashboardLayoutContextProvider } from "@/app/context/DashboardLayoutContext";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
	return (
		<DashboardLayoutContextProvider>
			<SidebarDashboard />
			<DashboardLayoutContent>{children}</DashboardLayoutContent>
		</DashboardLayoutContextProvider>
	);
}
