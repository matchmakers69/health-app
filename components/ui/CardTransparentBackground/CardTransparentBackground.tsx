import { Card } from "../Card";
import { type CardTransparentBackgroundProps } from "./defs";

function CardTransparentBackground({ children }: CardTransparentBackgroundProps) {
	return (
		<Card className="w-full max-w-[100%] p-[3rem] sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]">
			<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
				<div className="flex flex-col">{children}</div>
			</div>
		</Card>
	);
}

export default CardTransparentBackground;
