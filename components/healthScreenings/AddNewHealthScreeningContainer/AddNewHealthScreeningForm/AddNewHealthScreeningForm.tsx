"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState, useTransition, type ChangeEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseISO } from "date-fns";
import {
	type AddNewHealthScreenSchemaValues,
	addNewHealthScreenSchema,
} from "../../validation/addNewHealthScreenSchema";
import FileUploadFields from "../FileUploadFields";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useFileUploadContext } from "@/context/FileUploadsContext/FileUploadsContext";
import { FormError } from "@/components/ui/FormError";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { Checkbox } from "@/components/ui/Checkbox";
import { createHealthScreeningTest } from "@/actions/createHealthScreeningTest";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";
import DatePicker from "@/components/ui/DatePicker";

const dateFormat = "dd/MM/yyyy";

function AddNewHealthScreeningForm() {
	const { dispatch } = useDashboardLayoutContext();
	const { documents, uploadedFiles, uploadStatus, dispatch: fileUploadDispatch } = useFileUploadContext();
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const [isFormInteracted, setIsFormInteracted] = useState(false);

	const methods = useForm<AddNewHealthScreenSchemaValues>({
		mode: "onChange",
		resolver: zodResolver(addNewHealthScreenSchema, {}, { raw: true }),
		defaultValues: {
			name: "",
			notes: "",
			date_issued: undefined, // bare in mind we could default date to currentDate
			attachFile: false,
			secure_url: uploadedFiles[0]?.secure_url || "",
			format: uploadedFiles[0]?.format || "",
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
		watch,
		setValue,
		trigger,
	} = methods;

	const attachFile = watch("attachFile");

	useEffect(() => {
		if (documents.length > 0 && uploadedFiles.length > 0) {
			reset((values) => ({
				...values,
				secure_url: uploadedFiles[0]?.secure_url || "",
				format: uploadedFiles[0]?.format || "",
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
		setIsFormInteracted(true);

		if (e.target.checked) {
			trigger();
		} else {
			setValue("secure_url", "");
			setValue("format", "");
			trigger();
		}
	};

	const handleOpenModalWithFileDropzone = () => {
		dispatch({
			type: "OPEN_MODAL",
			payload: true,
		});
	};

	const handleAddNewHealthScreeningSubmit = (values: AddNewHealthScreenSchemaValues) => {
		setIsFormInteracted(true);

		if (values.date_issued === null) {
			setError("Please select a date");
			return;
		}

		const payload = {
			...values,
			secure_url: values.secure_url ? values.secure_url : null,
			format: values.format ? values.format : null,
			date_issued: values.date_issued instanceof Date ? values.date_issued : parseISO(values.date_issued),
		};

		console.log(payload, "fklf");

		startTransition(() => {
			createHealthScreeningTest(payload)
				.then((data) => {
					if (data?.error) {
						setError(data.error);
					}
					if (data?.success) {
						setSuccess(data?.success);
						reset({
							name: "",
							notes: "",
							attachFile: false,
							secure_url: "",
							format: "",
							date_issued: undefined,
						});
						fileUploadDispatch({
							type: "SET_UPLOAD_STATUS",
							payload: "idle",
						});
						setIsFormInteracted(false);
					}
				})
				.catch(() => setError("Something went wrong!"));
		});
	};

	return (
		<FormProvider {...methods}>
			<form autoComplete="off" noValidate onSubmit={handleSubmit(handleAddNewHealthScreeningSubmit)}>
				<div className="mb-14 flex w-full flex-col">
					<DatePicker
						name="date_issued"
						variant="outlined"
						dateFormat={dateFormat}
						label="Select date of your health screening"
						required
						control={methods.control}
						error={errors.date_issued}
						disablePast={false}
						disableFuture={false}
					/>
				</div>
				<div className="mb-14 flex w-full flex-col gap-[3rem]">
					<Input
						label="Enter test result name"
						type="text"
						className="w-full border-border-input-light bg-white placeholder-secondary"
						placeholder="Test name"
						{...register("name")}
						error={errors.name}
					/>

					<Textarea
						label="Add your note"
						className="border-border-input-light bg-white placeholder-secondary"
						placeholder="Note i.e 'No comments'"
						{...register("notes")}
						error={errors.notes}
					/>
					<div className="flex items-center gap-2">
						<Checkbox
							label="I want to attach a file (doc, docx, pdf, png, jpg)"
							checked={attachFile}
							onChange={handleCheckboxChange}
							id="attachFile"
							strokeColor="white"
							className="border-border-input-light checked:bg-dark-green"
						/>
					</div>
					{attachFile && (
						<>
							<Button
								type="button"
								onClick={handleOpenModalWithFileDropzone}
								size="full"
								className="w-full bg-navy text-white"
							>
								Upload file
							</Button>
							{uploadStatus === "complete" && <FileUploadFields />}
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
						size="full"
						disabled={
							isSubmitting ||
							isPending ||
							!isValid ||
							(attachFile && (!uploadedFiles[0]?.secure_url || !uploadedFiles[0]?.format))
						}
						className="w-full bg-dark-green text-white"
					>
						Add new health screening
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}

export default AddNewHealthScreeningForm;
