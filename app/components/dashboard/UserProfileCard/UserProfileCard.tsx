import { Card } from "../Card";
import { type UserProfileCardProps } from "./defs";

function UserProfileCard({ title, subtitle }: UserProfileCardProps) {
	return (
		<Card className="p-[1.5rem] text-center">
			<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
				<div className="flex flex-col">
					<p className="text-2xl font-bold leading-snug text-navy">{title}</p>
					<p className="text-[3rem] font-semibold text-navy">{subtitle}</p>
				</div>
			</div>
		</Card>
	);
}

export { UserProfileCard };
