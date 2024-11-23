import { type TextFieldProps, type BaseTextFieldProps } from "@mui/material";

import { type FieldError, type Control } from "react-hook-form";

export interface DatePickerProps extends Omit<BaseTextFieldProps, "error"> {
	name: string;
	label: string;
	value?: string | null;
	defaultValue?: Date | string | null;
	onChange?: (date: Date | null) => void;
	dateFormat: string;
	hasPlaceholder?: boolean;
	ariaRequired?: boolean;
	required?: boolean;
	minDate?: Date;
	maxDate?: Date;
	textFieldProps?: TextFieldProps;
	control?: Control<any>;
	disablePast: boolean;
	disableFuture: boolean;
	error?: FieldError;
}
