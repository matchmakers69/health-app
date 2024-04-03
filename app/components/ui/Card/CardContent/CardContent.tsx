import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("p-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";
