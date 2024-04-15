import { forwardRef, type ForwardedRef } from "react";
import { Slot } from "../Slot";
import { type ButtonProps, buttonVariants } from "./defs";
import { cn } from "@/lib/utils";

export const Button = forwardRef(
	(
		{ className, variant, size, asChild = false, ...props }: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		const Comp = asChild ? Slot : "button";
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	},
);

Button.displayName = "Button";
