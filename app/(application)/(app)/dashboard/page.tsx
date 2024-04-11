import { DashboardContent } from "@/app/components/dashboard/DashboardContent";
import { Button } from "@/app/components/ui/Button";
import { auth, signOut } from "@/auth";
import { appLinkLabels } from "@/lib/appData";

const Dashboard = async () => {
	const session = await auth();
	return (
		<div className="text-dark-green">
			<h3>Dashboard</h3>
			{JSON.stringify(session)}
			<form
				className="flex h-full w-full flex-col justify-center"
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<Button
					className="flex h-full w-full flex-col items-start  justify-center px-[1.2rem] py-0 text-[1.6rem] font-normal text-navy"
					variant="ghost"
					type="submit"
				>
					{appLinkLabels.SIGN_OUT}
				</Button>
			</form>
			<DashboardContent />
		</div>
	);
};

export default Dashboard;
