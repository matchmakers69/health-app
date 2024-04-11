import { Suspense } from "react";
import Loading from "./loading";
import { FooterAuth } from "@/app/components/ui/FooterAuth/FooterAuth";
import { AppLayoutContextProvider } from "@/app/context/AppLayoutContext";
import { Navbar } from "@/app/components/ui/Navbar";
import { LayoutContent } from "@/app/components/ui/LayoutContent";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppLayoutContextProvider>
				<LayoutContent>
					<Navbar />
				</LayoutContent>

				<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-grey pt-[80px]">
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</AppLayoutContextProvider>
			<FooterAuth />
		</>
	);
}
