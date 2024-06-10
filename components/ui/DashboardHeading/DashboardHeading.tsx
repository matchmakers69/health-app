import React from "react";
import { Rubik } from "next/font/google";
import { type DashboardHeadingProps } from "./defs";

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-Rubik",
	weight: ["600", "700", "800"],
});

const DashboardHeading = ({ title }: DashboardHeadingProps) => {
	return (
		<h1
			className={`${rubik.className} mb-[2rem] font-semibold leading-[1.2] text-dark-green md:text-[2.4rem]`}
		>
			{title}
		</h1>
	);
};

export { DashboardHeading };
