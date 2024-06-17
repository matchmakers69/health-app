"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ChangeEvent, useEffect, useState, useTransition } from "react";
import { type TestResultsFormValues, testResultsSchema } from "../validation/testResultsSchema";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useFileUploadContext } from "@/context/FileUploadsContext/FileUploadsContext";
import { createTestResult } from "@/actions/createTestResult";
import { FormError } from "@/components/ui/FormError";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { Checkbox } from "@/components/ui/Checkbox";

function CreateTestResultsForm() {
	const { documents, uploadedFiles } = useFileUploadContext();
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const [isFormInteracted, setIsFormInteracted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
		watch,
		setValue,
		trigger,
	} = useForm<TestResultsFormValues>({
		mode: "onChange",
		resolver: zodResolver(testResultsSchema, {}, { raw: true }),
		defaultValues: {
			name: "",
			description: "",
			attachFile: false,
			file_name: documents[0]?.file.name || "",
			version: uploadedFiles[0]?.version ? Number(uploadedFiles[0]?.version) : null,
			signature: uploadedFiles[0]?.signature || "",
			public_id: uploadedFiles[0]?.public_id || "",
		},
	});

	const attachFile = watch("attachFile");

	useEffect(() => {
		if (documents.length > 0 && uploadedFiles.length > 0) {
			reset((values) => ({
				...values,
				file_name: documents[0]?.file.name,
				version: Number(uploadedFiles[0]?.version),
				signature: uploadedFiles[0]?.signature,
				public_id: uploadedFiles[0]?.public_id,
			}));
		}
	}, [documents, reset, uploadedFiles]);

	useEffect(() => {
		if (isFormInteracted) {
			trigger();
		}
	}, [attachFile, trigger, isFormInteracted]);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue("attachFile", e.target.checked);
		setIsFormInteracted(true); // Set isFormInteracted to true when the checkbox is clicked
		if (e.target.checked) {
			trigger();
		}
	};

	const handleCreateTestSubmit = (values: TestResultsFormValues) => {
		setIsFormInteracted(true); // Set isFormInteracted to true when the form is submitted
		const payload = {
			...values,
			file_name: values.attachFile ? values.file_name : null,
			version: values.attachFile ? values.version : null,
			signature: values.attachFile ? values.signature : null,
			public_id: values.attachFile ? values.public_id : null,
		};

		startTransition(() => {
			createTestResult(payload)
				.then((data) => {
					if (data?.error) {
						setError(data.error);
					}
					if (data?.success) {
						setSuccess(data?.success);
					}
				})
				.catch(() => setError("Something went wrong!"));
		});
	};

	return (
		<>
			<form autoComplete="off" noValidate onSubmit={handleSubmit(handleCreateTestSubmit)}>
				<div className="mb-14 flex w-full flex-col gap-[3rem]">
					<Input
						label="Enter test result name"
						type="text"
						className="w-full border-border-input-light bg-transparent placeholder-secondary"
						placeholder="Test name"
						{...register("name")}
						error={errors.name}
					/>

					<Textarea
						label="Your issue description"
						className="border-border-input-light bg-transparent placeholder-secondary"
						placeholder="Test description"
						{...register("description")}
						error={errors.description}
					/>
					<div className="flex items-center gap-2">
						<Checkbox
							label="I want to attach a file"
							checked={attachFile}
							onChange={handleCheckboxChange}
							id="attachFile"
							strokeColor="white"
							className="border-border-input-light checked:bg-dark-green"
						/>
					</div>
					{attachFile && (
						<>
							<Input
								label="Enter file name"
								type="text"
								className="w-full border-border-input-light bg-transparent placeholder-secondary"
								placeholder="File name"
								{...register("file_name")}
								error={errors.file_name}
								readOnly
							/>
							<Input
								label="Enter version number"
								type="number"
								className="w-full border-border-input-light bg-transparent placeholder-secondary"
								placeholder="Version number"
								{...register("version")}
								error={errors.version}
								readOnly
							/>
							<Input
								label="Enter signature"
								type="text"
								className="w-full border-border-input-light bg-transparent placeholder-secondary"
								placeholder="Signature"
								{...register("signature")}
								error={errors.signature}
								readOnly
							/>
							<Input
								label="Enter public ID"
								type="text"
								className="w-full border-border-input-light bg-transparent placeholder-secondary"
								placeholder="Public ID"
								{...register("public_id")}
								error={errors.public_id}
								readOnly
							/>
						</>
					)}
				</div>
				<div className="mb-8">
					<FormError message={error} />
					<FormSuccess message={success} />
				</div>
				<div className="mb-8">
					<Button
						type="submit"
						size="lg"
						disabled={isSubmitting || isPending || !isValid}
						className="w-full bg-dark-green text-white"
					>
						Update
					</Button>
				</div>
			</form>
		</>
	);
}

export default CreateTestResultsForm;
