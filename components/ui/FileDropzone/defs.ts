export interface FileDropzoneProps {
	className?: string;
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

export type DocumentUploadStatus = "ready" | "pending" | "complete" | "failed";

export type UploadStatusRetrievedCallback = (status: DocumentUploadStatus, workflowId?: string) => void;
