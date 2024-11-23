import { type FieldError, type FieldErrorsImpl, type Merge } from "react-hook-form";

const useValidationErrorMessage = (
	errorMessage: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
) => {
	if (typeof errorMessage === "string") {
		return errorMessage;
	}

	return "";
};

export default useValidationErrorMessage;
