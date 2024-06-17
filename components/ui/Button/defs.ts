import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap text-sm uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20",
	{
		variants: {
			variant: {
				default: "bg-button-brown-bg text-white",
				outline: "border text-primary-foreground bg-transparent hover:bg-foreground hover:text-navy",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-text-light",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-6 py-2 text-base",
				sm: "h-16 px-7 text-base",
				lg: "h-20 px-8 text-md",
				xl: "h-24 px-8 text-md",
				icon: "h-10 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export type ButtonProps = Readonly<{
	asChild?: boolean;
}> &
	VariantProps<typeof buttonVariants> &
	ComponentProps<"button">;
