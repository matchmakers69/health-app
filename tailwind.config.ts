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
				"input-height": "clamp(3rem,2.5rem + 4vw,6rem)",
			},
			fontSize: {
				xs: "1.4rem",
				base: "1.4rem",
				sm: "1.4rem",
				md: "1.6rem",
				"md-xl": "1.8rem",
				"md-2xl": "3rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
				"3xl": "8rem",
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
				ring: "rgb(var(--ring))",
				background: "rgb(var(--background))",
				body: "rgb(var(--body))",
				"button-brown-bg": "rgb(var(--button-brown-bg))",
				navy: "rgb(var(--navy))",
				"dark-green": "rgb(var(--dark-green))",
				"foreground-green": "rgb(var(--foreground-green))",
				"border-bottom-light": "rgba(var(--border-bottom-light))",
				"foreground-purple": "rgb(var(--foreground-purple))",
				"foreground-grey": "rgb(var(--foreground-grey))",
				"light-green": "rgb(var(--light-green))",
				"light-grey": "rgb(var(--light-grey))",
				"dark-purple": "rgb(var(--dark-purple))",
				"bg-purple": "rgb(var(--bg-purple))",
				"wave-purple": "rgb(var(--wave-purple))",
				"text-light": "rgb(var(--text-light))",
				"footer-purple": "rgb(var(--footer-purple))",
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
				sm: "600px",
				md: "728px",
				lg: "984px",
				xl: "1240px",
				"2xl": "1496px",
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