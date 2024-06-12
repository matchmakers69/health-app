import { type ReactNode, type Dispatch } from "react";
import { type InvalidFiles, type DocumentUploadStatus } from "@/components/ui/FileDropzone/defs";

export interface FilesUploadContextProviderProps {
	children: ReactNode;
}

export interface Document {
	documentId?: string; // DocumentID corresponds with the document ID in the backend
	fileId: number; // File ID is used for locally referencing the file for removal from the queue
	file: File;
	status: DocumentUploadStatus;
}
export type UploadStatus = "idle" | "uploading" | "complete" | "error";

export interface DocumentUploadState {
	uploadStatus: UploadStatus;
	documents: Document[];
	rejectedFiles: InvalidFiles;
	removalMessage: string | null;
	isContainUploadFailed: boolean;
}

export type DocumentUploadAction =
	| { type: "SET_UPLOAD_STATUS"; payload: UploadStatus }
	| { type: "RESET" }
	| {
			type: "ADD_DOCUMENTS";
			payload: Document[];
	  }
	| {
			type: "SET_DOCUMENTS";
			payload: Document[];
	  }
	| {
			type: "SET_DOCUMENT_STATUS";
			payload: {
				documentId?: string;
				fileId?: number;
				status: DocumentUploadStatus;
			};
	  }
	| {
			type: "SET_DOCUMENT_ID";
			payload: { documentId: string; fileId: number };
	  }
	| {
			type: "SET_REJECTED_FILES";
			payload: InvalidFiles;
	  }
	| {
			type: "REMOVE_DOCUMENT";
			payload: { fileId: number };
	  }
	| { type: "SET_REMOVAL_MESSAGE"; payload: string }
	| { type: "RESET_REMOVAL_MESSAGE" }
	| { type: "SET_EMPLOYMENT_REF"; payload: number }
	| { type: "SET_WORKFLOW_ID"; payload: string };

export type DocumentUploadInit = DocumentUploadState & {
	dispatch: Dispatch<DocumentUploadAction>;
};
