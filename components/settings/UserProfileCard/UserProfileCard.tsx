import { Card } from "../Card";
import { type UserProfileCardProps } from "./defs";

function UserProfileCard({ children }: UserProfileCardProps) {
	return (
		<Card className="p-[1.5rem] text-center">
			<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
				<div className="flex flex-col">{children}</div>
			</div>
		</Card>
	);
}

export { UserProfileCard };
