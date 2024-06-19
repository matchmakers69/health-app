import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { DropdownNavbarList } from "../DropdownNavbarList";
import { NavbarDropDownMenu } from "../NavbarDropDownMenu";
import { Header } from "./Header";
import Avatar from "@/public/avatar.jpg";

import { routes } from "@/lib/routes";
import { appLinkLabels } from "@/lib/appData";
import { dropDownNav } from "@/lib/constants";

function Navbar() {
	return (
		<div role="navigation">
			<Header>
				<div className="site-header-right relative flex h-full flex-1 flex-wrap items-center justify-end">
					<div className="auth-buttons-wrapper flex items-center gap-6 pr-[1.5rem] md:pr-[20px]">
						<Button
							className="hidden bg-button-brown-bg uppercase hover:bg-white hover:text-navy md:flex"
							variant="default"
							asChild
							size="sm"
						>
							<Link href={routes.LOGIN}>{appLinkLabels.LOGIN}</Link>
						</Button>
						<Button
							className="hidden uppercase hover:bg-white hover:text-navy md:flex"
							variant="outline"
							asChild
							size="sm"
						>
							<Link href={routes.REGISTER}>{appLinkLabels.REGISTER}</Link>
						</Button>
					</div>
					<div className="pr-[1.5rem] md:pr-[20px]">
						<NavbarDropDownMenu
							button={<Image alt="avatar" src={Avatar} width="40" height="40" />}
							classNames="py-2 top-[4rem] -left-[15rem] min-w-[18rem] max-w-[30rem] w-full"
						>
							<div className="shadow-drop-down w-full overflow-hidden rounded-2xl bg-[rgba(255,255,255,.96)]">
								<div className="inner-drop-down flex flex-col items-start justify-between p-[1rem]">
									<DropdownNavbarList dropDownList={dropDownNav} />
								</div>
							</div>
						</NavbarDropDownMenu>
					</div>
				</div>
			</Header>
		</div>
	);
}

export { Navbar };
