import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import Avatar from "@/public/avatar.jpg";

function UserMenu() {
	return (
		<div className="sidebar-user-section border-footer-nav py-[1.5rem]">
			<div className="dropdown relative flex items-center justify-between">
				<div className="h-10 w-10 overflow-hidden rounded-full">
					<Image alt="avatar" src={Avatar} width="40" height="40" />
				</div>
				<p className="ml-2 grow text-sm font-semibold">Przemek Lewtak</p>

				<div role="button">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="outline-none" aria-label="sidebar user list button">
								<i className="ri-more-2-fill" />
							</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[180px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
								sideOffset={20}
								style={{
									zIndex: 400,
								}}
							>
								<DropdownMenu.Item className="relative flex h-[2.5rem] select-none items-center px-[.5rem] pl-[1rem] text-[1.4rem] leading-none outline-none data-[disabled]:pointer-events-none">
									<span
										className=" text-black"
										role="button"
										onClick={() =>
											signOut({
												redirect: true,
												callbackUrl: `${window.location.origin}/login`,
											})
										}
									>
										Logout
									</span>
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</div>
			</div>
		</div>
	);
}

export { UserMenu };
