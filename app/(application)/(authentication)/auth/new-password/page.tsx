import { NewPasswordForm } from "@/components/auth/NewPasswordForm";
import { Heading } from "@/components/ui/Heading";
import { pagesText } from "@/lib/appData";

function NewPasswordPage() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading title={pagesText.AUTH_PAGES.NEW_PASSWORD.title} />
				<NewPasswordForm />
			</div>
		</section>
	);
}

export default NewPasswordPage;
