import { motion } from "framer-motion";
import { NavLink } from "../NavLink";
import { CloseSidebarButton } from "../CloseSidebarButton/CloseSidebarButton";
import { framerSidebarBackground, framerSidebarPanel, navigation, framerText } from "@/lib/constants";
import { useAppLayoutContext } from "@/app/context/AppLayoutContext";

export function NavSidebar() {
	const { handleCloseSidebarMenu } = useAppLayoutContext();

	return (
		<>
			<motion.div
				{...framerSidebarBackground}
				aria-hidden="true"
				className="overlay-menu z-1 fixed bottom-0 left-0 right-0 top-0 h-full w-full bg-[rgba(0,0,0,0.2)] backdrop-blur-sm"
			/>
			<motion.div
				{...framerSidebarPanel}
				className="nav-menu z-2000 fixed bottom-0 left-0 top-0 z-50 flex h-full w-full"
				aria-label="Sidebar"
			>
				<div className="nav-menu-container z-2 relative flex h-full w-full max-w-[32rem] md:max-w-[34rem] lg:max-w-[36rem]">
					<div className="text-text-text-light relative z-10 flex min-h-screen w-full flex-col justify-between gap-2 overflow-y-auto bg-dark-purple pb-10 pt-10 text-left">
						<header className="sidebar-header flex flex-col px-[1.5rem] md:px-[2rem]">
							<CloseSidebarButton onClose={handleCloseSidebarMenu} />
						</header>

						<ul className="m-0 flex w-full flex-1 flex-col items-center justify-center p-0 md:flex-initial md:items-stretch">
							{navigation.map((nav) => (
								<li key={nav.id} className="py-4 pl-6 pr-6 text-left text-text-light md:pl-8 md:pr-8">
									<motion.div {...framerText}>
										<NavLink href={nav.href}>{nav.label}</NavLink>
									</motion.div>
								</li>
							))}
						</ul>

						<footer className="menu-footer pl-6 pr-6 md:pl-8 md:pr-8">Footer menu</footer>
					</div>
				</div>
			</motion.div>
		</>
	);
}
