import { NewIssueForm } from "@/components/issues/NewIssueForm";
import { UserProfileCard } from "@/components/settings/UserProfileCard";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";

function NewIssuePage() {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="New issue" />
			<UserProfileCard>
				<CardTitle className="mb-12 text-[2rem]">Create new issue</CardTitle>
				<NewIssueForm />
			</UserProfileCard>
		</main>
	);
}

export default NewIssuePage;
