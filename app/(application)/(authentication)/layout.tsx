import { FooterAuth } from "@/app/components/ui/FooterAuth/FooterAuth";
import { AppLayoutContextProvider } from "@/app/context/AppLayoutContext";
import { AppLayoutContent } from "@/app/components/ui/AppLayoutContent";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppLayoutContextProvider>
				<AppLayoutContent>{children}</AppLayoutContent>
			</AppLayoutContextProvider>
			<FooterAuth />
		</>
	);
}
