import { type CloseSidebarButtonProps } from "./defs";

function CloseSidebarButton({ onClose }: CloseSidebarButtonProps) {
	return (
		<button
			type="button"
			className="close-menu inline-flex h-[3rem] cursor-pointer items-center text-[13px] uppercase tracking-[.15rem] text-gray-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
			onClick={onClose}
		>
			<div className="menu-close-icon relative flex h-[1.5rem] w-[1.5rem] flex-col items-start justify-center">
				<span className="nth-child-1 bg-gray-200" />
				<span className="nth-child-2 bg-gray-200" />
				<span className="close-menu-text ml-[1.5rem] block">Close</span>
			</div>
		</button>
	);
}

export { CloseSidebarButton };
