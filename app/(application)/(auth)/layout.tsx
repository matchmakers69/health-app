import { Suspense } from "react";
import { Navbar } from "@/app/components/ui/Navbar";
import { FooterAuth } from "@/app/components/ui/FooterAuth/FooterAuth";
import Loading from "@/app/loading";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-grey pt-[80px]">
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</main>
			<FooterAuth />
		</>
	);
}
