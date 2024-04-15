import { DashboardLayoutContent } from "@/components/ui/DashboardLayoutContent";
import { SidebarDashboard } from "@/components/ui/SidebarDashboard";
import { DashboardLayoutContextProvider } from "@/context/DashboardLayoutContext";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
	return (
		<DashboardLayoutContextProvider>
			<SidebarDashboard />
			<DashboardLayoutContent>{children}</DashboardLayoutContent>
		</DashboardLayoutContextProvider>
	);
}
