import { NewVerificationForm } from "@/components/auth/NewVerificationForm";
import { Heading } from "@/components/ui/Heading";
import { pagesText } from "@/lib/appData";

function NewVerificationPage() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading title={pagesText.AUTH_PAGES.VERIFICATION.title} />
				<NewVerificationForm />
			</div>
		</section>
	);
}

export default NewVerificationPage;
