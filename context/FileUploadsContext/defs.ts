import { type ReactNode, type Dispatch } from "react";
import { type InvalidFiles, type DocumentUploadStatus } from "@/components/ui/FileDropzone/defs";

export interface FilesUploadContextProviderProps {
	children: ReactNode;
}
export interface FileWithMetadata extends File {
	fileId?: number;
	path?: string;
}

export interface Document {
	file: FileWithMetadata;
	fileName: string;
	status: DocumentUploadStatus;
}

export interface DocumentUploaded {
	secure_url: string;
	format: string;
	// version: number;
	// signature: string;
	// public_id: string;
}

export type UploadStatus = "idle" | "uploading" | "complete" | "error";

export interface DocumentUploadState {
	documents: Document[];
	uploadedFiles: DocumentUploaded[];
	isUploading: boolean;
	uploadStatus: UploadStatus;
	rejectedFiles: InvalidFiles;
	// removalMessage: string | null;
	// isContainUploadFailed: boolean;
}

export type DocumentUploadAction =
	| { type: "SET_UPLOAD_STATUS"; payload: UploadStatus }
	| { type: "ADD_DOCUMENT"; payload: FileWithMetadata }
	| { type: "RESET" }
	| {
			type: "SET_REJECTED_FILES";
			payload: InvalidFiles;
	  }
	| { type: "SAVE_UPLOADED_FILE"; payload: DocumentUploaded }
	| { type: "SET_IS_UPLOADING"; payload: boolean }
	| { type: "UPDATE_DOCUMENT_STATUS"; payload: { file: FileWithMetadata; status: Document["status"] } }
	| { type: "REMOVE_DOCUMENT"; payload: FileWithMetadata };

export type DocumentUploadInit = DocumentUploadState & {
	dispatch: Dispatch<DocumentUploadAction>;
};
