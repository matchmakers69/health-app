import { NewIssueForm } from "@/components/issues/NewIssueForm";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import CardWithBackground from "@/components/ui/CardWithBackground";
import { DashboardHeading } from "@/components/ui/DashboardHeading";

function NewIssuePage() {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="New issue" />
			<CardWithBackground>
				<CardTitle className="mb-12 text-[2rem] text-dark-green">Create new issue</CardTitle>
				<NewIssueForm />
			</CardWithBackground>
		</main>
	);
}

export default NewIssuePage;
