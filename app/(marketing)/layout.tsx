import { Suspense } from "react";
import { AppLayoutContextProvider } from "../context/AppLayoutContext";
import { FooterMarketing } from "../components/ui/FooterMarketing";
import { Navbar } from "../components/ui/Navbar";
import Loading from "../loading";
import { LayoutContent } from "../components/ui/LayoutContent";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppLayoutContextProvider>
				<LayoutContent>
					<Navbar />
				</LayoutContent>
				<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-blue pt-[80px]">
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</AppLayoutContextProvider>
			<FooterMarketing />
		</>
	);
}
