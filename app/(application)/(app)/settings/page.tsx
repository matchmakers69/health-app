import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { AccountForm } from "@/components/auth/AccountForm";
import CardTransparentBackground from "@/components/ui/CardTransparentBackground";

const SettingsPage = () => {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="Settings" />
			<CardTransparentBackground>
				<CardTitle className="mb-12 text-[2rem]">User profile</CardTitle>
				<AccountForm />
			</CardTransparentBackground>
		</main>
	);
};

export default SettingsPage;
