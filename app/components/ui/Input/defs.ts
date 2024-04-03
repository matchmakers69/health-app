import { type InputHTMLAttributes } from "react";
import { type FieldError } from "react-hook-form";

export interface FormData {
	id?: string | number;
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type FormInputProps = {
	label?: string;
	error?: FieldError;
} & InputProps;
