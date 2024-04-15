import { UserProfileCard } from "../UserProfileCard";

function DashboardContent() {
	return (
		<>
			<div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
				<UserProfileCard title={"Profile"} subtitle={"Your details"} />
			</div>
		</>
	);
}

export { DashboardContent };
