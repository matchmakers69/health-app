import { AppLayoutContextProvider } from "../context/AppLayoutContext";
import { MarketingLayoutContent } from "../components/ui/MarketingLayoutContent";
import { FooterMarketing } from "../components/ui/FooterMarketing";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppLayoutContextProvider>
				<MarketingLayoutContent>{children}</MarketingLayoutContent>
			</AppLayoutContextProvider>
			<FooterMarketing />
		</>
	);
}
