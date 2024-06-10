import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: {
				DEFAULT: "1.5rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},

		extend: {
			height: {
				"input-height": "clamp(3rem,2.5rem + 4vw,5.5rem)",
			},
			fontSize: {
				base: "1.4rem",
				sm: "1.5rem",
				md: "1.6rem",
				"md-xl": "1.8rem",
				"md-2xl": "3rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
				"3xl": "8rem",
			},
			placeholderColor: {
				primary: "rgb(var(--light-grey))",
				secondary: "#ffed4a",
				danger: "#e3342f",
			},
			padding: {
				"pb-3xl": "var(--spacer-x3)",
				"pt-3xl": "var(--spacer-x3)",
				"pb-2xl": "var(--spacer-x2)",
				"p-input": "var(--p-input)",
			},
			flex: {
				"2": "1 0 auto",
			},
			colors: {
				border: "rgb(var(--border))",
				"border-input-dark": "rgb(var(--border-input-dark))",
				"border-input-light": "rgb(var(--border-input-light) / 0.09)",
				ring: "rgb(var(--ring))",
				"ring-dark": "rgb(var(--ring-dark))",
				background: "rgb(var(--background))",
				body: "rgb(var(--body))",
				"button-brown-bg": "rgb(var(--button-brown-bg))",
				navy: "rgb(var(--navy))",
				"dark-green": "rgb(var(--dark-green))",
				"foreground-green": "rgb(var(--foreground-green))",
				"destructive-foreground": "rgb(var(--destructive-foreground))",
				destructive: "rgb(var(--destructive))",
				error: "rgb(var(--error))",
				"success-foreground": "rgb(var(--success-foreground))",
				success: "rgb(var(--success))",
				"border-bottom-light": "rgba(var(--border-bottom-light))",
				"foreground-blue": "rgb(var(--foreground-blue))",
				"light-blue": "rgb(var(--light-blue))",
				"foreground-grey": "rgb(var(--foreground-grey))",
				"light-green": "rgb(var(--light-green))",
				"light-grey": "rgb(var(--light-grey))",
				"dark-purple": "rgb(var(--dark-purple))",
				"bg-purple": "rgb(var(--bg-purple))",
				"wave-purple": "rgb(var(--wave-purple))",
				"text-light": "rgb(var(--text-light))",
				foreground: "rgb(var(--foreground))",

				primary: {
					DEFAULT: "rgb(var(--primary))",
					foreground: "rgb(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary))",
					foreground: "rgb(var(--secondary-foreground))",
				},
			},
			screens: {
				sm: "576px",
				"sm-max": { max: "576px" },
				md: "768px",
				"md-max": { max: "768px" },
				lg: "992px",
				"lg-max": { max: "992px" },
				xl: "1200px",
				"xl-max": { max: "1200px" },
				"2xl": "1320px",
				"2xl-max": { max: "1320px" },
				"3xl": "1600px",
				"3xl-max": { max: "1600px" },
				"4xl": "1850px",
				"4xl-max": { max: "1850px" },
			},

			fontFamily: {
				IbmPlex: ["var(--font-ibmPlex)"],
				Rubik: ["var(--font-Rubik)"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(-2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [],
};
export default config;
