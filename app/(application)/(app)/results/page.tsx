import CreateTestResultsForm from "@/components/results/CreateTestResultsForm";
import { UserProfileCard } from "@/components/settings/UserProfileCard";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { FileDropzoneWrapper } from "@/components/ui/FileDropzone/FileDropzoneWrapper";

const ResultsPage = () => {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="Test results" />
			<FileDropzoneWrapper maxSizeInMB={10} />
			<UserProfileCard>
				<CardTitle className="mb-12 text-[2rem]">Add your test results</CardTitle>
				<CreateTestResultsForm />
			</UserProfileCard>
		</main>
	);
};

export default ResultsPage;
