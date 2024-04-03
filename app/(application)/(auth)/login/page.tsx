import { LoginForm } from "@/app/components/auth/LoginForm";
import { Heading } from "@/app/components/ui/Heading";

function Login() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading subtitle="Welcome back ;)" title="Login" />
				<LoginForm />
			</div>
		</section>
	);
}

export default Login;
