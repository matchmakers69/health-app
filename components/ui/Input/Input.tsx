import { forwardRef, useId } from "react";
import { type FormInputProps } from "./defs";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
	({ className, type, label, error, ...props }, ref) => {
		const id = useId();

		return (
			<>
				{label && (
					<label
						htmlFor={id}
						className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
					>
						{label}
					</label>
				)}
				<div className={cn("w-full", error ? "relative shadow-sm" : "static")}>
					<input
						type={type}
						className={cn(
							"h-input-height border-border-input-dark px-p-input lg:text-md-xl flex w-full border bg-background py-0 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-md",
							className,
						)}
						// {...(name && register ? register(name) : {})}
						ref={ref}
						id={id}
						{...props}
					/>
					{error && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error.message}</p>}
				</div>
			</>
		);
	},
);

Input.displayName = "Input";
