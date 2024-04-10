import { type FormErrorProps } from "./defs";

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<div className="bg-destructive-foreground text-destructive flex items-center gap-x-2 rounded-md px-6 py-3 text-sm">
			<i className="ri-error-warning-line text-md" />
			<p className="font-semibold">{message}</p>
		</div>
	);
};
