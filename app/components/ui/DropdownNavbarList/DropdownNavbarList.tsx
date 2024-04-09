import Link from "next/link";
import { Button } from "../Button";
import { dropDownNav } from "@/lib/constants";
import { appLinkLabels } from "@/lib/appData";
import { logOut } from "@/app/actions/logOut";

function DropdownNavbarList() {
	return (
		<ul className="drop-down-list w-full">
			{dropDownNav.map((dropDownLink) => {
				if (dropDownLink.label === appLinkLabels.SIGN_OUT) {
					return (
						<li
							key={dropDownLink.id}
							className="h-[4.5rem] w-full transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
						>
							<form
								noValidate
								autoComplete="off"
								className="flex h-full w-full flex-col justify-center"
								action={logOut}
							>
								<Button
									className="flex h-full w-full flex-col items-start  justify-center px-[1.2rem] py-0 text-[1.6rem] font-normal text-navy"
									variant="ghost"
									type="submit"
								>
									{appLinkLabels.SIGN_OUT}
								</Button>
							</form>
						</li>
					);
				}
				return (
					<li
						key={dropDownLink.id}
						className="h-[4.5rem] w-full transition-all duration-300 hover:rounded-2xl hover:bg-[rgba(31,81,156,.2)]"
					>
						<Link
							className="flex h-full w-full flex-col justify-center  px-[1.2rem] text-[1.6rem] text-navy"
							href={dropDownLink.href}
						>
							{dropDownLink.label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export { DropdownNavbarList };
