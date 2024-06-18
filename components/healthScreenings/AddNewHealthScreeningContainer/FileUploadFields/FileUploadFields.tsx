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
				label="Enter file name"
				type="text"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="File name"
				{...register("file_name")}
				error={getFieldError(errors, "file_name")}
				readOnly
			/>
			<Input
				label="Enter version number"
				type="number"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="Version number"
				{...register("version")}
				error={getFieldError(errors, "version")}
				readOnly
			/>
			<Input
				label="Enter signature"
				type="text"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="Signature"
				{...register("signature")}
				error={getFieldError(errors, "signature")}
				readOnly
			/>
			<Input
				label="Enter public ID"
				type="text"
				className="w-full border-border-input-light bg-white placeholder-secondary"
				placeholder="Public ID"
				{...register("public_id")}
				error={getFieldError(errors, "public_id")}
				readOnly
			/>
		</>
	);
}

export default FileUploadFields;
