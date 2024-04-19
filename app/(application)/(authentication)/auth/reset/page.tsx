import { ResetForm } from "@/components/auth/ResetForm";
import { Heading } from "@/components/ui/Heading";
import { pagesText } from "@/lib/appData";

function ResetPage() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading title={pagesText.AUTH_PAGES.PASSWORD_RESET.title} />
				<ResetForm />
			</div>
		</section>
	);
}

export default ResetPage;
