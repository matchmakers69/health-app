import { IBM_Plex_Sans, Rubik } from "next/font/google";
import Image from "next/image";
import { type HeadingProps } from "./defs";

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-Rubik",
	weight: ["600", "700", "800"],
});

const IbmPlex = IBM_Plex_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ibmPlex",
	weight: ["300", "400", "500", "600", "700"],
});

export function Heading({ title, subtitle }: HeadingProps) {
	return (
		<div className="heading-slogans pb-pb-2xl relative flex flex-col items-center justify-center gap-2">
			<h1
				className={`${rubik.className} text-lg font-extrabold uppercase leading-[1.2] md:text-lg lg:text-2xl xl:text-3xl`}
			>
				{title}
			</h1>
			<Image
				src="/apple-full.svg"
				alt="logo"
				className="cursor-pointer"
				quality={100}
				width={25}
				height={25}
			/>
			{subtitle && (
				<p className={`${IbmPlex.className} md:text-md-xl text-sm font-semibold uppercase`}>{subtitle}</p>
			)}
		</div>
	);
}