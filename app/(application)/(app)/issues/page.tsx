import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { routes } from "@/lib/routes";

function IssuesPage() {
	return (
		<main className="text-dark-green">
			<DashboardHeading title="Issues" />
			<Button className="hidden uppercase md:flex" variant="default" asChild size="sm">
				<Link href={routes.NEW_ISSUE}>New issue</Link>
			</Button>
		</main>
	);
}

export default IssuesPage;
