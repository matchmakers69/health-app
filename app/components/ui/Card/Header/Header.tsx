interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-y-2">
			<p className="mb-6 text-md">{label}</p>
		</div>
	);
};
