"use client";

import { useCallback } from "react";
import { FileDropzone } from "../FileDropzone";
import { Card } from "../../Card";
import { DocumentsUploadQueue } from "../DocumentsUploadQueue";
import { type InvalidFiles } from "../defs";
import UploadingButtons from "../UploadingButtons";
import { type FileDropzoneWrapperProps } from "./defs";
import acceptedDocumentTypes from "@/lib/constants";
import { useFileUploadContext } from "@/context/FileUploadsContext/FileUploadsContext";
import { getSignature, saveToDatabase } from "@/actions/upload";
import { generateShortNumericUUID } from "@/utils/generateShortNumericUUID";
import { type FileWithMetadata } from "@/context/FileUploadsContext/defs";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function FileDropzoneWrapper({ maxSizeInMB }: FileDropzoneWrapperProps) {
	const { dispatch, documents, uploadStatus } = useFileUploadContext();
	const { dispatch: dashboardDispatch } = useDashboardLayoutContext();

	const handleFilesAdded = useCallback(
		(files: File[], rejectedFiles: InvalidFiles) => {
			files.forEach((file) => {
				const fileId = generateShortNumericUUID();
				const fileWithId: FileWithMetadata = Object.assign(file, { fileId });
				dispatch({ type: "ADD_DOCUMENT", payload: fileWithId });
			});

			dispatch({ type: "SET_REJECTED_FILES", payload: rejectedFiles });
		},
		[dispatch],
	);

	const handleSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			dispatch({ type: "SET_IS_UPLOADING", payload: true });

			const filesToUpload = documents.filter((doc) => doc.status === "ready");
			if (!filesToUpload.length) {
				dispatch({ type: "SET_IS_UPLOADING", payload: false });
				return;
			}

			await Promise.all(
				filesToUpload.map(async (document) => {
					const { file } = document;
					dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "uploading" } });
					dispatch({ type: "SET_UPLOAD_STATUS", payload: "uploading" });
					try {
						const { timestamp, signature } = await getSignature();

						const formData = new FormData();
						formData.append("file", file);
						formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
						formData.append("signature", signature);
						formData.append("timestamp", timestamp.toString());
						formData.append("folder", "avatars");

						const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;

						if (!endpoint) {
							console.error("Cloudinary upload URL is not defined.");
							dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "error" } });
							return;
						}

						const data = await fetch(endpoint, {
							method: "POST",
							body: formData,
						}).then((res) => res.json());

						await saveToDatabase({
							version: data?.version,
							signature: data?.signature,
							public_id: data?.public_id,
						});
						dispatch({ type: "SAVE_UPLOADED_FILE", payload: data });
						dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "complete" } });
						dispatch({ type: "SET_UPLOAD_STATUS", payload: "complete" });
					} catch (error) {
						console.error("Error uploading file:", error);
						dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "error" } });
						dispatch({ type: "SET_UPLOAD_STATUS", payload: "error" });
					}
				}),
			);

			dispatch({ type: "SET_IS_UPLOADING", payload: false });
		},
		[documents, dispatch],
	);

	const handleRemoveDocument = (fileName: string) => {
		const fileToRemove = documents.find((doc) => doc.file.name === fileName);
		if (fileToRemove) {
			dispatch({ type: "REMOVE_DOCUMENT", payload: fileToRemove.file });
		}
	};

	const handleCancelUploading = useCallback(() => {
		dispatch({ type: "RESET" });
	}, [dispatch]);

	const handleUploadMoreFiles = useCallback(() => {
		dispatch({ type: "RESET" });
	}, [dispatch]);

	const handleCloseDropzoneModal = useCallback(() => {
		dashboardDispatch({
			type: "CLOSE_MODAL",
			payload: false,
		});
	}, [dashboardDispatch]);

	const isUploadCompleted = uploadStatus === "complete";
	const isUploading = uploadStatus === "uploading" || uploadStatus === "error";

	return (
		<>
			<form noValidate onSubmit={handleSubmit}>
				{!documents.length && ( // We allow only one file to be added - possibly change later
					<Card className="w-full max-w-[100%] p-[3rem] sm:max-w-[56rem] md:max-w-[60rem] lg:max-w-[70rem]">
						<h2 className="mb-3 font-medium text-dark-green">Choose files to upload</h2>
						<div className="flex h-full w-full flex-col sm:flex-wrap lg:flex-nowrap">
							<div className="flex flex-col">
								<FileDropzone
									maxSizeInMB={maxSizeInMB}
									onFilesAdded={handleFilesAdded}
									acceptedFileTypes={acceptedDocumentTypes}
									className="mb-0 flex flex-col items-center"
								/>
							</div>
						</div>
					</Card>
				)}

				{documents.length > 0 && (
					<>
						<DocumentsUploadQueue onRemoveDocument={handleRemoveDocument} />
						<UploadingButtons
							uploadComplete={isUploadCompleted}
							onCancel={handleCancelUploading}
							uploadInProgress={isUploading}
							onUploadMoreFiles={handleUploadMoreFiles}
							onCloseDropzoneModal={handleCloseDropzoneModal}
						/>
					</>
				)}
			</form>
		</>
	);
}

export { FileDropzoneWrapper };
