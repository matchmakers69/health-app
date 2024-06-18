import { type DocumentUploadAction, type DocumentUploadState } from "../defs";

export const reducer = (state: DocumentUploadState, action: DocumentUploadAction): DocumentUploadState => {
	switch (action.type) {
		case "SET_UPLOAD_STATUS":
			return {
				...state,
				uploadStatus: action.payload,
			};
		case "ADD_DOCUMENT":
			return {
				...state,
				documents: [
					...state.documents,
					{ file: action.payload, fileName: action.payload.name, status: "ready" },
				],
			};
		case "SAVE_UPLOADED_FILE":
			return {
				...state,
				uploadedFiles: [...state.uploadedFiles, action.payload],
			};

		case "RESET":
			return {
				...state,
				uploadStatus: "idle",
				documents: [],
				uploadedFiles: [],
				// isContainUploadFailed: false,
				rejectedFiles: [],
			};
		case "UPDATE_DOCUMENT_STATUS":
			return {
				...state,
				documents: state.documents.map((doc) =>
					doc.file === action.payload.file ? { ...doc, status: action.payload.status } : doc,
				),
			};
		case "REMOVE_DOCUMENT":
			return {
				...state,
				documents: state.documents.filter((doc) => doc.file !== action.payload),
			};
		case "SET_REJECTED_FILES":
			return {
				...state,
				rejectedFiles: action.payload,
			};
		case "CANCEL_DOCUMENT":
			return {
				...state,
				documents: state.documents.map((doc) =>
					doc.file === action.payload ? { ...doc, status: "canceled" } : doc,
				),
			};
		case "SET_IS_UPLOADING":
			return {
				...state,
				isUploading: action.payload,
			};
		default:
			return state;
	}
};

//let fileId: number | undefined, documentId: string | undefined; // TODO

// switch (action.type) {
// 	case "SET_UPLOAD_STATUS":
// 		return {
// 			...state,
// 			uploadStatus: action.payload,
// 		};
// 	case "RESET":
// 		return {
// 			...state,
// 			uploadStatus: "idle",
// 			documents: [],
// 			rejectedFiles: [],
// 			isContainUploadFailed: false,
// 		};

// 	case "ADD_DOCUMENTS":
// 		return {
// 			...state,
// 			documents: [...state.documents, ...action.payload],
// 		};

// 	case "SET_DOCUMENT_STATUS":
// 		fileId = action.payload.fileId;
// 		documentId = action.payload.documentId;
// 		return {
// 			...state,
// 			documents: [
// 				...state.documents.map((doc) => {
// 					if (
// 						(documentId && doc.documentId === documentId) ||
// 						(typeof fileId === "number" && doc.fileId === fileId)
// 					) {
// 						return {
// 							...doc,
// 							status: action.payload.status,
// 						};
// 					}
// 					return doc;
// 				}),
// 			],
// 			isContainUploadFailed: state.isContainUploadFailed || action.payload.status === "failed",
// 		};

// 	case "SET_REJECTED_FILES":
// 		return {
// 			...state,
// 			rejectedFiles: action.payload,
// 		};

// 	case "REMOVE_DOCUMENT":
// 		return {
// 			...state,
// 			documents: state.documents.filter((doc) => doc.fileId !== action.payload.fileId),
// 		};

// 	case "SET_REMOVAL_MESSAGE":
// 		return {
// 			...state,
// 			removalMessage: action.payload,
// 		};

// 	default:
// 		return state;
// }
