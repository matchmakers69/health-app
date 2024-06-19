"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../Button";
import { type InvalidFiles, type FileDropzoneProps } from "./defs";
import { convertMbToBytes } from "@/utils/convertMbToBytes";

function FileDropzone({ className, acceptedFileTypes, onFilesAdded, maxSizeInMB }: FileDropzoneProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[], rejectedFiles: InvalidFiles) => {
			onFilesAdded(acceptedFiles, rejectedFiles);
		},
		[onFilesAdded],
	);

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
			<div className="dashed-dropzone-container flex h-[17rem] w-full flex-col items-center justify-center border-2 border-dashed border-gray-300 p-4">
				{isDragActive ? (
					<p>Drag file you want to upload here</p>
				) : (
					<div className="file-drop-box flex cursor-pointer flex-col items-center justify-center gap-0">
						<i className="ri-file-upload-line text-[2.5rem]"></i>
						<p className="mb-4 font-semibold">Drag and drop files here or</p>
						<Button
							type="button"
							size="lg"
							className="w-full min-w-[10rem] max-w-[15rem] bg-button-brown-bg text-white"
						>
							Browse files
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export { FileDropzone };
