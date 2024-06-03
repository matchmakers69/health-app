import { UserProfileCard } from "@/components/settings/UserProfileCard";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { AccountForm } from "@/components/auth/AccountForm";

const SettingsPage = () => {
	return (
		<div className="text-dark-green">
			<DashboardHeading title="Settings" />
			<div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
				<UserProfileCard>
					<CardTitle className="text-md-2xl">User profile</CardTitle>
					<AccountForm />
				</UserProfileCard>
				<UserProfileCard>
					<CardTitle className="text-md-2xl">Card title</CardTitle>
				</UserProfileCard>
			</div>
		</div>
	);
};

export default SettingsPage;
