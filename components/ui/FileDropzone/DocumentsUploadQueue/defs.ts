import { type DocumentUploadStatus } from "../defs";

export interface DocumentUploadsItem {
	fileId: number;
	fileName: string;
	status: DocumentUploadStatus;
}

export interface DocumentsUploadQueueProps {
	onRemoveDocument: (fileName: string) => void;
	// onUpload: () => void;
	// onCancel: () => void;
	// onHandleResetUpload: () => void;
}
