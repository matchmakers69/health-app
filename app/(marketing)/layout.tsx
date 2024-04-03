import { Navbar } from "../components/ui/Navbar";
import { FooterMarketing } from "../components/ui/FooterMarketing";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="animated flex min-h-[50vh] max-w-full flex-2 flex-col bg-foreground-purple pt-[80px]">
				{children}
			</main>
			<FooterMarketing />
		</>
	);
}
