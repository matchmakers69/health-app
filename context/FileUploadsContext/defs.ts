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
	version: number;
	signature: string;
	public_id: string;
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
	| { type: "REMOVE_DOCUMENT"; payload: FileWithMetadata }
	| { type: "CANCEL_DOCUMENT"; payload: FileWithMetadata };

// export type DocumentUploadAction =
// 	| { type: "ADD_DOCUMENT"; payload: FileWithMetadata }
// 	| { type: "SAVE_UPLOADED_FILE"; payload: DocumentUploaded }
// 	| { type: "SET_IS_UPLOADING"; payload: boolean }
// 	| { type: "UPDATE_DOCUMENT_STATUS"; payload: { file: File; status: Document["status"] } }
// 	| { type: "REMOVE_DOCUMENT"; payload: File }
// 	| { type: "CANCEL_DOCUMENT"; payload: File };

// export type DocumentUploadAction =
// 	| { type: "SET_UPLOAD_STATUS"; payload: UploadStatus }
// 	| { type: "RESET" }
// 	| {
// 			type: "ADD_DOCUMENTS";
// 			payload: Document[];
// 	  }
// 	| {
// 			type: "SET_DOCUMENTS";
// 			payload: Document[];
// 	  }
// 	| {
// 			type: "SET_DOCUMENT_STATUS";
// 			payload: {
// 				documentId?: string;
// 				fileId?: number;
// 				status: DocumentUploadStatus;
// 			};
// 	  }
// 	| {
// 			type: "SET_DOCUMENT_ID";
// 			payload: { documentId: string; fileId: number };
// 	  }
// 	| {
// 			type: "SET_REJECTED_FILES";
// 			payload: InvalidFiles;
// 	  }
// 	| {
// 			type: "REMOVE_DOCUMENT";
// 			payload: { fileId: number };
// 	  }
// 	| { type: "SET_REMOVAL_MESSAGE"; payload: string }
// 	| { type: "RESET_REMOVAL_MESSAGE" }
// 	| { type: "SET_EMPLOYMENT_REF"; payload: number }
// 	| { type: "SET_WORKFLOW_ID"; payload: string };

export type DocumentUploadInit = DocumentUploadState & {
	dispatch: Dispatch<DocumentUploadAction>;
};
