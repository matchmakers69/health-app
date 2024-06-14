import { type ReactNode, type Dispatch } from "react";
import { type DocumentUploadStatus } from "@/components/ui/FileDropzone/defs";

export interface FilesUploadContextProviderProps {
	children: ReactNode;
}

// export interface Document {
// 	documentId?: string; // DocumentID corresponds with the document ID in the backend
// 	fileId: number; // File ID is used for locally referencing the file for removal from the queue
// 	file: File;
// 	status: DocumentUploadStatus;
// }

export interface Document {
	fileId?: number; // File ID is used for locally referencing the file for removal from the queue
	file: File;
	status: DocumentUploadStatus;
}

export type UploadStatus = "idle" | "uploading" | "complete" | "error";

export interface DocumentUploadState {
	documents: Document[];
	isUploading: boolean;
	// uploadStatus: UploadStatus;
	// documents: Document[];
	// rejectedFiles: InvalidFiles;
	// removalMessage: string | null;
	// isContainUploadFailed: boolean;
}

export type DocumentUploadAction =
	| { type: "ADD_DOCUMENT"; payload: File }
	| { type: "SET_IS_UPLOADING"; payload: boolean }
	| { type: "UPDATE_DOCUMENT_STATUS"; payload: { file: File; status: Document["status"] } }
	| { type: "REMOVE_DOCUMENT"; payload: File }
	| { type: "CANCEL_DOCUMENT"; payload: File };

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
