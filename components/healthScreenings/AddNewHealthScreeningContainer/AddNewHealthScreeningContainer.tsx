"use client";

import AddNewHealthScreeningForm from "./AddNewHealthScreeningForm";
import CardTransparentBackground from "@/components/ui/CardTransparentBackground";
import { CardTitle } from "@/components/ui/Card/CardTitle";
import { FileDropzoneWrapper } from "@/components/ui/FileDropzone/FileDropzoneWrapper";
import Modal from "@/components/ui/Modal";
import { useDashboardLayoutContext } from "@/context/DashboardLayoutContext";

function AddNewHealthScreeningContainer() {
	const { isModalInView, dispatch } = useDashboardLayoutContext();
	const handleCloseModal = () => {
		dispatch({
			type: "CLOSE_MODAL",
			payload: false,
		});
	};
	return (
		<>
			<Modal open={isModalInView} title="Attach your file" onClose={handleCloseModal}>
				<FileDropzoneWrapper maxSizeInMB={10} />
			</Modal>

			<CardTransparentBackground>
				<CardTitle className="mb-12 text-[2rem] text-dark-green">Add new health screening</CardTitle>
				<AddNewHealthScreeningForm />
			</CardTransparentBackground>
		</>
	);
}

export default AddNewHealthScreeningContainer;
