import { type ComponentPropsWithRef } from "react";
import { type FieldError } from "react-hook-form";

export type TextareaProps = {
	label?: string;
	error?: FieldError;
} & ComponentPropsWithRef<"textarea">;
