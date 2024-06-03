import { type UserInfoProps } from "./defs";
import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/Card/CardContent";
import { CardHeader } from "@/components/ui/Card/CardHeader";

function UserInfo({ user, label }: UserInfoProps) {
	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<p className="text-center text-2xl font-semibold">{label}</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
					<p className="text-sm font-medium">ID</p>
				</div>
			</CardContent>
		</Card>
	);
}

export { UserInfo };
