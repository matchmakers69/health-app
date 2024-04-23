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
						className="mb-6 block text-base font-medium leading-6 text-text-light md:text-md lg:text-md-xl"
					>
						{label}
					</label>
				)}
				<div className={cn("w-full", error ? "relative shadow-sm" : "static")}>
					<input
						type={type}
						className={cn(
							"flex h-input-height w-full border border-border-input-dark bg-background px-p-input py-0 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-md lg:text-md-xl",
							className,
						)}
						// {...(name && register ? register(name) : {})}
						ref={ref}
						id={id}
						{...props}
					/>
					{error && <p className="text-error mt-2 text-sm md:text-md">{error.message}</p>}
				</div>
			</>
		);
	},
);

Input.displayName = "Input";
