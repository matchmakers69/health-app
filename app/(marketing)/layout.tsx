import { Suspense } from "react";
import Loading from "../loading";
import { FooterMarketing } from "@/components/ui/FooterMarketing";
import { LayoutContent } from "@/components/ui/LayoutContent";
import { Navbar } from "@/components/ui/Navbar";
import { AppLayoutContextProvider } from "@/context/AppLayoutContext";

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
