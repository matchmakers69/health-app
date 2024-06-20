"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import {
	type DocumentUploadState,
	type DocumentUploadInit,
	type FilesUploadContextProviderProps,
} from "./defs";
import { reducer } from "./reducers/fileUploadReducer";

const FilesUploadContext = createContext<DocumentUploadInit | null>(null);

export const useFileUploadContext = () => {
	const context = useContext(FilesUploadContext);
	if (!context) {
		throw Error("You overlooked wrapping with FilesUploadContextProvider");
	}

	return context;
};
const initialState: DocumentUploadState = {
	documents: [],
	isUploading: false,
	uploadedFiles: [],
	rejectedFiles: [],
	uploadStatus: "idle",
};

export const FilesUploadContextProvider = ({ children }: FilesUploadContextProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = useMemo(
		() => ({
			...state,
			dispatch,
		}),
		[state],
	);

	return <FilesUploadContext.Provider value={value}>{children}</FilesUploadContext.Provider>;
};
