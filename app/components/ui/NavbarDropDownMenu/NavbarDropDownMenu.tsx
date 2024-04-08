import { useState } from "react";
import { type NavbarDropDownMenuProps } from "./defs";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/app/hooks/useClickOutside";

function NavbarDropDownMenu({ button, children, classNames, animation }: NavbarDropDownMenuProps) {
	const [openWrapper, setOpenWrapper] = useState(false);

	const handleToggleDropdown = () => {
		setOpenWrapper((prevState) => !prevState);
	};

	const handleClickOutside = () => {
		setOpenWrapper(false);
	};
	const { ref } = useClickOutside<HTMLDivElement>({
		onOutside: handleClickOutside,
	});

	return (
		<div className="relative" ref={ref}>
			<div role="button" className="flex items-center gap-2" onClick={handleToggleDropdown}>
				<div className="logo-img-wrapper flex h-[4rem] w-[4rem] flex-col items-center justify-center overflow-hidden rounded-full">
					{button}
				</div>
				<i
					className={`ri-${openWrapper ? "arrow-up-s-fill" : "arrow-down-s-fill"} text-[1.6rem] text-white`}
				></i>
			</div>
			<div
				className={cn(
					`absolute z-10 ${
						animation ? animation : "origin-top-right transition-all duration-300 ease-in-out"
					} ${openWrapper ? "block" : "hidden"}`,
					classNames,
				)}
			>
				{children}
			</div>
		</div>
	);
}

export default NavbarDropDownMenu;
