export const appLinkLabels = {
	HOME: "Home",
	LOGIN: "Login",
	REGISTER: "Register",
	DASHBOARD: "Dashboard",
	SIGN_OUT: "Sign out",
};

export const headerLabels = {
	MENU: "Menu",
};

export const validationRules = {
	REGISTER: {
		nameRequired: "Name is required",
		emailRequired: "Email is required",
		nameMaxLength: "Name must be a maximun 30 characters",
		invalidEmailAddress: "Invalid email address",
		nameOneSpace: "Spaces are not allowed",
		passwordMin: "Password must be at least 6 characters long",
		passwordMax: "Password must be a maximun 30 characters",
		passwordUppercase: "Must conatain one uppercase character",
		passwordWithNumber: "Must contains one number",
		passwordWithSpecialCharacter: "Must contain one special character",
	},
	LOGIN: {
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
		passwordMin: "Password must be at least 2 characters long",
	},
};

export const pagesText = {
	AUTH_PAGES: {
		LOGIN: {
			title: "Login",
			subtitle: "Welcome to That Festival Site!",
			noAccountText: "Don't have an account?",
		},

		REGISTER: {
			cardTitle: "Fill in your details below and click Register to create an account:",
			backButtonLabel: "Already have an account?",
			existingUserError: "Email already in use!",
			invalidFieldsError: "Invalid fields!",
		},

		ERROR: {
			title: "Sorry, error occured!",
			cardTitle: "Oops! Something went wrong!",
			backButtonLabel: "Back to login",
			OAuthAccountError: "Email already in use. Please login with form.",
		},
	},
};
