import { Resend } from "resend";
import { routes } from "./routes";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000${routes.NEW_VERIFICATION}?token=${token}`; //TODO temporary only change localhost to real domain
	await resend.emails.send({
		from: "onboarding@resend.dev", // TODO temporary only
		to: email,
		subject: "Confirm your email",
		html: `<p>Click <a href=${confirmLink}>here</a> to confirm email.</p>`,
	});
};
