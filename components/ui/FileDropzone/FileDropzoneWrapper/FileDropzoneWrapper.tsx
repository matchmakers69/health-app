"use client";

import { useCallback } from "react";
import { FileDropzone } from "../FileDropzone";
import { Card } from "../../Card";
import { DocumentsUploadQueue } from "../DocumentsUploadQueue";
import { Button } from "../../Button";
import { type FileDropzoneWrapperProps } from "./defs";
import acceptedDocumentTypes from "@/lib/constants";
import { useFileUploadContext } from "@/context/FileUploadsContext/FileUploadsContext";
import { getSignature, saveToDatabase } from "@/actions/upload";

function FileDropzoneWrapper({ maxSizeInMB }: FileDropzoneWrapperProps) {
	const { dispatch, documents, isUploading } = useFileUploadContext();

	const handleFilesAdded = useCallback(
		(files: File[]) => {
			files.forEach((file) => {
				dispatch({ type: "ADD_DOCUMENT", payload: file });
			});
		},
		[dispatch],
	);

	const handleSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			dispatch({ type: "SET_IS_UPLOADING", payload: true });

			const filesToUpload = documents.filter((doc) => doc.status === "ready");
			if (filesToUpload.length === 0) {
				dispatch({ type: "SET_IS_UPLOADING", payload: false });
				return;
			}

			await Promise.all(
				filesToUpload.map(async (document) => {
					const { file } = document;
					dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "uploading" } });

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
					} catch (error) {
						console.error("Error uploading file:", error);
						dispatch({ type: "UPDATE_DOCUMENT_STATUS", payload: { file, status: "error" } });
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

	return (
		<>
			<form noValidate onSubmit={handleSubmit}>
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

				<DocumentsUploadQueue onRemoveDocument={handleRemoveDocument} />
				<Button type="submit" disabled={isUploading}>
					{isUploading ? <div className="spinner">Uploading files...</div> : "Submit"}
				</Button>
			</form>
		</>
	);
}

export { FileDropzoneWrapper };
