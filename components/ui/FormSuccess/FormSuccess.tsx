import { type FormSuccessProps } from "./defs";

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="bg-success-foreground text-success flex items-center gap-x-2 rounded-md px-6 py-3 text-sm">
			<i className="ri-checkbox-circle-line font-md" />
			<p className="font-semibold">{message}</p>
		</div>
	);
};
