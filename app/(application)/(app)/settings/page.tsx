import { auth } from "@/auth";
import { UserProfileCard } from "@/components/settings/UserProfileCard";
import { DashboardHeading } from "@/components/ui/DashboardHeading";

const Settings = async () => {
	const session = await auth();
	return (
		<div className="text-dark-green">
			<DashboardHeading title="Settings" />
			<div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
				<UserProfileCard>fefgtegethgv</UserProfileCard>
				<UserProfileCard>fdkeswvgdasc</UserProfileCard>
			</div>
		</div>
	);
};

export default Settings;
