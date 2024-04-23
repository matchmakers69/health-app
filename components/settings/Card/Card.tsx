import { type CardProps } from "./defs";
import { cn } from "@/lib/utils";

function Card({ children, className, ...rest }: CardProps) {
	return (
		<div
			className={cn(
				"!z-5 shadow-3xl relative flex flex-col rounded-[1.5rem] bg-white bg-clip-border",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}

export { Card };
