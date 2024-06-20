import { Button } from "../../Button";
import { type UploadingButtonsProps } from "./defs";
import { appLinkLabels } from "@/lib/appData";

function UploadingButtons({
	onCancel,
	uploadInProgress,
	uploadComplete,
	onUploadMoreFiles,
	onCloseDropzoneModal,
}: UploadingButtonsProps) {
	return (
		<div className="flex items-center justify-center gap-6">
			{!uploadComplete && !uploadInProgress && (
				<>
					<Button className="bg-navy" size="default" type="submit" disabled={uploadInProgress}>
						{uploadInProgress ? (
							<span className="spinner block">{appLinkLabels.HEALTH_SCREENINGS.uploadingFiles}</span>
						) : (
							`${appLinkLabels.HEALTH_SCREENINGS.startUploadingButton}`
						)}
					</Button>

					<Button
						variant="outline"
						onClick={onCancel}
						size="default"
						className="border-navy text-navy"
						type="button"
						disabled={uploadInProgress}
					>
						{appLinkLabels.HEALTH_SCREENINGS.cancelButton}
					</Button>
				</>
			)}
			{uploadComplete && (
				<>
					<Button
						className="hidden bg-navy md:flex"
						variant="default"
						onClick={onCloseDropzoneModal}
						size="default"
					>
						{appLinkLabels.HEALTH_SCREENINGS.closeButton}
					</Button>

					<Button
						variant="outline"
						onClick={onUploadMoreFiles}
						size="default"
						className="border-navy text-navy"
						type="button"
					>
						{appLinkLabels.HEALTH_SCREENINGS.uploadMoreButton}
					</Button>
				</>
			)}
		</div>
	);
}

export default UploadingButtons;
