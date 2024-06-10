import { forwardRef, useId } from "react";
import { type FormInputProps } from "./defs";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
	({ className, type, label, error, ...props }, ref) => {
		const id = useId();

		return (
			<div>
				{label && (
					<label
						htmlFor={id}
						className={`${props.disabled ? "opacity-15" : "opacity-100"} mb-3 block text-left text-base font-medium leading-6 md:text-md`}
					>
						{label}
					</label>
				)}
				<div className={cn("w-full", error ? "relative shadow-sm" : "static")}>
					<input
						type={type}
						className={cn(
							"flex h-input-height w-full border border-border-input-dark bg-background px-p-input py-0 text-sm placeholder-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring-dark disabled:cursor-not-allowed disabled:opacity-50 md:text-md",
							className,
						)}
						// {...(name && register ? register(name) : {})}
						ref={ref}
						id={id}
						{...props}
					/>
					{error && <p className="mt-2 text-left text-base text-error">{error.message}</p>}
				</div>
			</div>
		);
	},
);

Input.displayName = "Input";
