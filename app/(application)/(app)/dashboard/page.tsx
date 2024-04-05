import { auth } from "@/auth";

const Dashboard = async () => {
	const session = await auth();
	return (
		<div className="text-dark-green">
			<h3>Dashboard</h3>
			{JSON.stringify(session)}
		</div>
	);
};

export default Dashboard;
