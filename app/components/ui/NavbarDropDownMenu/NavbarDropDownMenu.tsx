import { useState } from "react";
import { type NavbarDropDownMenuProps } from "./defs";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/app/hooks/useClickOutside";

function NavbarDropDownMenu({ button, children, classNames, animation }: NavbarDropDownMenuProps) {
	const [isDropdownOpened, setIsDropdownOpened] = useState(false);

	const handleToggleDropdown = () => {
		setIsDropdownOpened((prevState) => !prevState);
	};

	const handleClickOutside = () => {
		setIsDropdownOpened(false);
	};
	const { ref } = useClickOutside<HTMLDivElement>({
		onOutside: handleClickOutside,
	});

	return (
		<div className="relative" ref={ref}>
			<button
				type="button"
				className="flex items-center gap-2 bg-transparent focus:outline-none focus:ring-1 focus:ring-sky-500"
				onClick={handleToggleDropdown}
			>
				<div className="logo-img-wrapper flex h-[4rem] w-[4rem] flex-col items-center justify-center overflow-hidden rounded-full">
					{button}
				</div>
				<i
					className={`ri-${isDropdownOpened ? "arrow-up-s-fill" : "arrow-down-s-fill"} text-[1.6rem] text-white`}
				></i>
			</button>
			<div
				className={cn(
					`absolute z-10 ${
						animation ? animation : "origin-top-right transition-all duration-300 ease-in-out"
					} ${isDropdownOpened ? "block" : "hidden"}`,
					classNames,
				)}
			>
				{children}
			</div>
		</div>
	);
}

export { NavbarDropDownMenu };
