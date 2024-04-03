import { type FormSuccessProps } from "./defs";

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
			Success
			<p>{message}</p>
		</div>
	);
};
