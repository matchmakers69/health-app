"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../Button";
import { type FileDropzoneProps } from "./defs";
import { convertMbToBytes } from "@/utils/convertMbToBytes";

function FileDropzone({ className, acceptedFileTypes, onFilesAdded, maxSizeInMB }: FileDropzoneProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			onFilesAdded(acceptedFiles);
		},
		[onFilesAdded],
	);
	// const onDrop = useCallback(
	// 	(acceptedFiles: File[], fileRejections: FileRejection[]) => {
	// 		const rejectedFiles = fileRejections.map((fileRejection) => fileRejection.file);
	// 		const invalidFiles: InvalidFiles = rejectedFiles.map((file) => ({
	// 			file,
	// 			errors: [{ code: "INVALID_FILE", message: "File is not valid" }],
	// 		}));
	// 		onFilesSelected(acceptedFiles, invalidFiles);
	// 	},
	// 	[onFilesSelected],
	// );

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		maxSize: convertMbToBytes(maxSizeInMB),
		accept: acceptedFileTypes,
		maxFiles: 1, // May change
		onDrop,
	});
	return (
		<div
			{...getRootProps({
				className: className,
			})}
		>
			<input {...getInputProps()} />
			<div className="dashed-dropzone-container flex h-[17rem] w-full flex-col items-center justify-center border-2 border-dashed border-indigo-600 p-6">
				{isDragActive ? (
					<p>Drag file you want to upload here</p>
				) : (
					<div className="file-drop-box flex flex-col items-center justify-center">
						<p className="mb-4 font-semibold">Drag and drop files here or</p>
						<Button type="button" size="lg" className="w-full min-w-[10rem] max-w-[15rem] text-white">
							Browse files
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export { FileDropzone };
