import { type ForwardedRef, forwardRef, useId } from "react";
import { type TextareaProps } from "./defs";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef(
	({ className, label, error, ...rest }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
		const id = useId();
		// "flex h-input-height w-full border border-border-input-dark bg-background px-p-input py-0 text-sm placeholder-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring-dark disabled:cursor-not-allowed disabled:opacity-50 md:text-md

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
				<div className={cn("w-full", error ? "relative shadow-sm" : "static")}>
					<textarea
						rows={4}
						className={
							error
								? `block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6  ${className}`
								: `block w-full border border-border-input-dark bg-background px-p-input py-0 text-sm placeholder-primary file:text-sm file:font-medium placeholder:text-left placeholder:opacity-40 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring-dark disabled:cursor-not-allowed disabled:opacity-50 md:text-md ${className}`
						}
						// {...(name && register ? register(name) : {})}
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
