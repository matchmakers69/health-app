import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
	),
);
CardTitle.displayName = "CardTitle";
