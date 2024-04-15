import { ErrorCard } from "@/components/auth/ErrorCard";
import { Heading } from "@/components/ui/Heading";
import { pagesText } from "@/lib/appData";

export default function AuthErrorPage() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading title={pagesText.AUTH_PAGES.ERROR.title} />
				<ErrorCard />
			</div>
		</section>
	);
}
