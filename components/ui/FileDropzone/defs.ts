export interface FileDropzoneProps {
	maxSizeInMB: number;
	className?: string;
	acceptedFileTypes: Record<string, string[]>;
	onFilesAdded: (acceptedFiles: File[], rejectedFiles: InvalidFiles) => void;
}

export interface FileError {
	code: string;
	message: string;
}

export interface InvalidFile {
	file: File;
	errors: {
		code: string;
		message: string;
	}[];
}

export type InvalidFiles = InvalidFile[];

export interface InvalidFileErrors {
	fileTooLarge: File[];
	fileInvalidType: File[];
}

export type DocumentUploadStatus = "ready" | "uploading" | "complete" | "error" | "canceled";

export type UploadStatusRetrievedCallback = (status: DocumentUploadStatus, workflowId?: string) => void;
