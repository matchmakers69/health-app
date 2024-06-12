import { type CardProps } from "./defs";
import { cn } from "@/lib/utils";

function Card({ children, className, ...rest }: CardProps) {
	return (
		<div className={cn("!z-5 relative flex flex-col bg-clip-border", className)} {...rest}>
			{children}
		</div>
	);
}

export { Card };
