export interface UploadingButtonsProps {
	uploadInProgress: boolean;
	uploadComplete: boolean;
	onCancel: () => void;
	onUploadMoreFiles: () => void;
	onCloseDropzoneModal: () => void;
}
