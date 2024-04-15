import { auth } from "@/auth";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = async () => {
	const session = await auth();
	return (
		<div className="text-dark-green">
			<h3>Dashboard</h3>
			{JSON.stringify(session)}

			<DashboardContent />
		</div>
	);
};

export default Dashboard;
