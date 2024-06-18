"use client";

import { useMemo } from "react";
import { type DocumentsUploadQueueProps } from "./defs";
import { type Document } from "@/context/FileUploadsContext/defs";
import { useFileUploadContext } from "@/context/FileUploadsContext/FileUploadsContext";

function DocumentsUploadQueue({ onRemoveDocument }: DocumentsUploadQueueProps) {
	const { documents } = useFileUploadContext();

	const filesAddedToQueue = useMemo(() => {
		return documents.map((document: Document) => ({
			fileId: document.file.fileId,
			fileName: document.fileName,
			status: document.status,
		}));
	}, [documents]);

	//const isUploadCompleted = uploadStatus === "complete";
	// const isUploading = uploadStatus === "uploading" || uploadStatus === "error";

	if (filesAddedToQueue.length === 0) return null;

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="text-surface min-w-full text-left text-sm font-light dark:text-white">
							<thead className="border-b border-neutral-200 font-medium dark:border-white/10">
								<tr>
									<th scope="col" className="px-6 py-4">
										File name
									</th>
									<th scope="col" className="px-6 py-4">
										Status
									</th>
									<th scope="col" className="px-6 py-4">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{filesAddedToQueue.map((uploadedItem) => {
									return (
										<tr
											key={uploadedItem.fileId}
											className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
										>
											<td className="whitespace-nowrap px-6 py-4 font-medium">{uploadedItem.fileName}</td>
											<td className="whitespace-nowrap px-6 py-4">{uploadedItem.status}</td>
											<td className="whitespace-nowrap px-6 py-4">
												{uploadedItem.status === "ready" && (
													<button onClick={() => onRemoveDocument(uploadedItem.fileName)}>Remove</button>
												)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export { DocumentsUploadQueue };
