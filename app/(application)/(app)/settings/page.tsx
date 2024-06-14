import { UserProfileCard } from "@/components/settings/UserProfileCard";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { AccountForm } from "@/components/auth/AccountForm";
import { FileDropzoneWrapper } from "@/components/ui/FileDropzone/FileDropzoneWrapper";

const SettingsPage = () => {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="Settings" />
			<FileDropzoneWrapper maxSizeInMB={10} />
			<UserProfileCard>
				<CardTitle className="mb-12 text-[2rem]">User profile</CardTitle>
				<AccountForm />
			</UserProfileCard>
		</main>
	);
};

export default SettingsPage;
