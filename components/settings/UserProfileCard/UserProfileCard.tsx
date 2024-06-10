import { Card } from "../Card";
import { type UserProfileCardProps } from "./defs";

function UserProfileCard({ children }: UserProfileCardProps) {
	return (
		<Card className="w-full max-w-[100%] p-[3rem] shadow-sm sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]">
			<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
				<div className="flex flex-col">{children}</div>
			</div>
		</Card>
	);
}

export { UserProfileCard };
