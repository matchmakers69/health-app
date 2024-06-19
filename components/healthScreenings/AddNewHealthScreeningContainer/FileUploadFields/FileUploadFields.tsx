"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { getFieldError } from "@/utils/getFieldError";

function FileUploadFields() {
	const {
		formState: { errors },
		register,
	} = useFormContext();
	return (
		<>
			<Input
				label="File url"
				type="text"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="File url"
				{...register("secure_url")}
				error={getFieldError(errors, "secure_url")}
				readOnly
			/>
			<Input
				label="File format"
				type="text"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="i.e pdf, jpg, png, docs"
				{...register("format")}
				error={getFieldError(errors, "format")}
				readOnly
			/>
		</>
	);
}

export default FileUploadFields;
