import { forwardRef, useId } from "react";
import { type FormInputProps } from "./defs";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
	({ className, type, label, error, readOnly, ...props }, ref) => {
		const id = useId();

		return (
			<div>
				{label && (
					<label
						htmlFor={id}
						className={`${props.disabled ? "opacity-15" : "opacity-100"} mb-3 block text-left font-IbmPlex text-base font-semibold leading-6 md:text-md`}
					>
						{label}
					</label>
				)}

				<div className={cn("w-full", error ? "relative" : "static")}>
					<input
						type={type}
						className={cn(
							"flex h-input-height w-full px-p-input py-0 text-left font-IbmPlex text-sm placeholder-primary placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring-dark disabled:cursor-not-allowed disabled:opacity-50 md:text-md",
							error
								? "border-0 bg-background ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 focus:ring-ring-dark"
								: "border border-border-input-dark bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
							readOnly ? "cursor-not-allowed opacity-50" : "",
							className,
						)}
						ref={ref}
						id={id}
						readOnly={readOnly}
						{...props}
					/>
					{error && <p className="mt-2 text-left text-base text-error">{error.message}</p>}
				</div>
			</div>
		);
	},
);

Input.displayName = "Input";
