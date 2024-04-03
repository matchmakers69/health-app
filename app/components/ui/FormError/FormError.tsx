import { type FormErrorProps } from "./defs";

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<div className="bg-destructive/15 text-destructive flex items-center gap-x-2 rounded-md p-3 text-sm">
			Warning
			<p>{message}</p>
		</div>
	);
};
