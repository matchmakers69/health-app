import { IssuesCard } from "@/components/issues/IssuesCard";
import { NewIssueForm } from "@/components/issues/NewIssueForm";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";

function NewIssuePage() {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="New issue" />
			<IssuesCard>
				<CardTitle className="mb-12 text-[2rem]">Create new issue</CardTitle>
				<NewIssueForm />
			</IssuesCard>
		</main>
	);
}

export default NewIssuePage;
