import { type ForwardedRef, forwardRef, useId } from "react";
import { type TextareaProps } from "./defs";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef(
	({ className, label, error, ...rest }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
		const id = useId();

		return (
			<div>
				{label && (
					<label
						htmlFor={id}
						className={`${rest.disabled ? "opacity-15" : "opacity-100"} mb-3 block text-left text-base font-medium leading-6 md:text-md`}
					>
						{label}
					</label>
				)}

				<div className={cn("w-full", error ? "relative" : "static")}>
					<textarea
						rows={4}
						className={
							error
								? `block w-full border-0 bg-background px-p-input py-0 text-sm placeholder-primary ring-1 ring-inset ring-red-300 placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 focus:ring-ring-dark md:text-md  ${className}`
								: `block w-full border border-border-input-dark bg-background px-p-input py-0 text-sm placeholder-primary placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring-dark disabled:cursor-not-allowed disabled:opacity-50 md:text-md ${className}`
						}
						ref={ref}
						id={id}
						{...rest}
					/>
					{error && <p className="mt-2 text-left text-base text-error">{error.message}</p>}
				</div>
			</div>
		);
	},
);

Textarea.displayName = "Textarea";
