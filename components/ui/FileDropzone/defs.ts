export interface FileDropzoneProps {
	maxSizeInMB: number;
	className?: string;
	acceptedFileTypes: Record<string, string[]>;
	onFilesAdded: (files: File[]) => void;
	// onFilesSelected: (acceptedFiles: File[], rejectedFiles: InvalidFiles) => void;
}

export interface FileError {
	code: string;
	message: string;
}

export interface InvalidFile {
	file: File;
	errors: FileError[];
}

export type InvalidFiles = InvalidFile[];

export interface InvalidFileErrors {
	fileTooLarge: File[];
	fileInvalidType: File[];
}

export type DocumentUploadStatus = "ready" | "uploading" | "complete" | "error" | "canceled";

export type UploadStatusRetrievedCallback = (status: DocumentUploadStatus, workflowId?: string) => void;
