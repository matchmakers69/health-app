import { type FormSuccessProps } from "./defs";

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="mb-8 flex items-center bg-success-foreground px-6 py-3 text-sm text-success">
			<i className="ri-checkbox-circle-line font-md" />
			<p aria-live="assertive" className="font-semibold">
				{message}
			</p>
		</div>
	);
};
