import { RegisterForm } from "@/components/auth/RegisterForm";
import { Heading } from "@/components/ui/Heading";

function Register() {
	return (
		<section className="pb-pb-3xl pt-pt-3xl text-text-light">
			<div className="container mx-auto">
				<Heading title="Register" subtitle="Create an account" />
				<RegisterForm />
			</div>
		</section>
	);
}

export default Register;
