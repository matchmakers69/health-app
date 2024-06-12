"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { type FileDropzoneProps } from "./defs";

function FileDropzone({ className }: FileDropzoneProps) {
	const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: File[]) => {}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: true,
	});
	return (
		<div
			{...getRootProps({
				className: className,
			})}
		>
			<input {...getInputProps()} />
			<div className="dashed-dropzone-container flex h-[17rem] w-full flex-col items-center justify-center border-2 border-dashed border-indigo-600 p-8">
				{isDragActive ? (
					<p>Drag file you want to upload here</p>
				) : (
					<p className="file-drop-box">Click to select files</p>
				)}
			</div>
		</div>
	);
}

export { FileDropzone };
