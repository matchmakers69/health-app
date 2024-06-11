import { Suspense } from "react";
import Loading from "./loading";
import { FooterAuth } from "@/components/ui/FooterAuth";
import { LayoutContent } from "@/components/ui/LayoutContent";
import { Navbar } from "@/components/ui/Navbar";
import { AppLayoutContextProvider } from "@/context/AppLayoutContext";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppLayoutContextProvider>
				<LayoutContent>
					<Navbar />
				</LayoutContent>

				<main className="animated bg-foreground-dark-violet flex min-h-[50vh] max-w-full flex-2 flex-col pt-[80px]">
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</AppLayoutContextProvider>
			<FooterAuth />
		</>
	);
}
