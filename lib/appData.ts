import { routes } from "./routes";

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

export const actionMessages = {
	REGISTER: {
		emailConfirmation: "Thank you. Please check your email. We just sent a verification link.",
	},
	LOGIN: {
		emailNotExist: "Email does not exist",
		confirmationEmailSent: "Confirmation email sent! Please check your inbox.",
	},
	VERIFICATION: {
		tokenNonExist: "Token does not exist!",
		tokenHasExpired: "Token has expired!",
		userNonExist: "Email does not exist!",
		emailVerified: "Email verified!",
		missingToken: "Missing token!",
		errorMsg: "Something went wrong!",
	},

	RESET_PASSWORD: {
		emailNotFound: "Email not found!",
		invalidEmailAddress: "Invalid email address",
		resetEmailSent: "Reset email sent! Check your inbox!",
	},

	NEW_PASSWORD: {
		missingToken: "Missing token!",
		invalidFields: "Invalid fields!",
		invalidToken: "Invalid token!",
		tokenExpired: "Token has expired!",
		emailNotExist: "Email does not exist!",
		successPasswordUpdated: "Congrats!, Your password has been updated!",
	},
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
		passwordUppercase: "Password must conatain an uppercase character",
		passwordWithNumber: "Password must contain a number",
		passwordWithSpecialCharacter: "Password must contain a special character",
	},
	LOGIN: {
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
		passwordMin: "Password must be at least 2 characters long",
	},
	RESET_PASSWORD: {
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
	},
};

export const pagesText = {
	AUTH_PAGES: {
		LOGIN: {
			title: "Login",
			subtitle: "Welcome to That Festival Site!",
			noAccountText: "Don't have an account?",
			signInButton: "Sign In",
			forgotPasswordButtonLabel: "Forgot password?",
		},

		REGISTER: {
			cardTitle: "Fill in your details below and click Register to create an account:",
			backButtonLabel: "Already have an account?",
			existingUserError: "Email already in use!",
			invalidFieldsError: "Invalid fields!",
		},

		VERIFICATION: {
			title: "User verification",
			subtitle: "Confirming your verification",
			backButtonLabel: "Back to login",
			backButtonHref: routes.LOGIN,
		},

		PASSWORD_RESET: {
			title: "Forgot your password?",
			forgotPassword: "Enter your email to reset your password",
			backButtonLabel: "Back to login",
			backButtonHref: routes.LOGIN,
			buttonSubmitReset: "Send reset email",
		},

		ERROR: {
			title: "Sorry, error occured!",
			cardTitle: "Oops! Something went wrong!",
			backButtonLabel: "Back to login",
			OAuthAccountError: "Email already in use. Please login with form.",
		},
		NEW_PASSWORD: {
			title: "Password reset",
			newPasswordCardTitle: "Enter a new password",
			buttonSubmitResetPassword: "Reset password",
		},
	},
};
