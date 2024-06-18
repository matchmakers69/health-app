import { type CardWithBackgroundProps } from "./defs";
import { Card } from "@/components/ui/Card";

function CardWithBackground({ children }: CardWithBackgroundProps) {
	return (
		<Card className="w-full max-w-[100%] rounded-xl bg-white p-[3rem] shadow-md sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]">
			<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
				<div className="flex flex-col">{children}</div>
			</div>
		</Card>
	);
}

export default CardWithBackground;
