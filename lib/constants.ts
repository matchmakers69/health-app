export const navigation = [
	{
		id: 1,
		label: "Home",
		href: "/",
	},
	{
		id: 2,
		label: "Dashboard",
		href: "/dashboard",
	},
	{
		id: 3,
		label: "Login",
		href: "/login",
	},
	{
		id: 4,
		label: "Register",
		href: "/register",
	},
];

export const framerSidebarBackground = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0, transition: { delay: 0.2 } },
	transition: { duration: 0.5 },
};

export const framerSidebarPanel = {
	initial: { x: "-100%" },
	animate: { x: 0 },
	exit: { x: "-100%" },
	transition: { duration: 0.3 },
};

export const framerText = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};
