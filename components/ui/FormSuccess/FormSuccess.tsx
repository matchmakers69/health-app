import { type FormSuccessProps } from "./defs";

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="flex items-center gap-x-2 rounded-md bg-success-foreground px-6 py-3 text-sm text-success">
			<i className="ri-checkbox-circle-line font-md" />
			<p aria-live="assertive" className="font-semibold">
				{message}
			</p>
		</div>
	);
};
