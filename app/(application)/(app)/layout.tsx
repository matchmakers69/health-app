import { DashboardLayoutContent } from "@/components/ui/DashboardLayoutContent";
import { SidebarDashboard } from "@/components/ui/SidebarDashboard";
import { DashboardLayoutContextProvider } from "@/context/DashboardLayoutContext";
import { FilesUploadContextProvider } from "@/context/FileUploadsContext/FileUploadsContext";

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
	return (
		<DashboardLayoutContextProvider>
			<FilesUploadContextProvider>
				<SidebarDashboard />
				<DashboardLayoutContent>{children}</DashboardLayoutContent>
			</FilesUploadContextProvider>
		</DashboardLayoutContextProvider>
	);
}
