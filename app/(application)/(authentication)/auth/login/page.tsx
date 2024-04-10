import { LoginForm } from "@/app/components/auth/LoginForm";
import { Heading } from "@/app/components/ui/Heading";
import { pagesText } from "@/lib/appData";

function Login() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading subtitle={pagesText.AUTH_PAGES.LOGIN.subtitle} title={pagesText.AUTH_PAGES.LOGIN.title} />
				<LoginForm />
			</div>
		</section>
	);
}

export default Login;
