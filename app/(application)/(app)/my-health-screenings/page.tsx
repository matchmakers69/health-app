import getHealthScreeningTests from "@/actions/getHealthScreeningTests";
import { DashboardHeading } from "@/components/ui/DashboardHeading";
import { currentUser } from "@/lib/auth";

export default async function MyHealthScreeningsPage() {
	const user = await currentUser();
	if (!user || !user.id) {
		return null;
	}

	const data = await getHealthScreeningTests(user.id);
	console.log(data);
	return (
		<main className="text-dark-green">
			<DashboardHeading title="My health screenings" />
		</main>
	);
}
