import Link from "next/link";
import { Button } from "../../Button";
import { type UploadingButtonsProps } from "./defs";
import { routes } from "@/lib/routes";
import { appLinkLabels } from "@/lib/appData";

function UploadingButtons({
	onCancel,
	uploadInProgress,
	uploadComplete,
	onUploadMoreFiles,
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
					<Button className="hidden bg-navy md:flex" variant="default" asChild size="default">
						<Link href={routes.MY_HEALTH_SCREENINGS}>
							{appLinkLabels.HEALTH_SCREENINGS.goToHealthScreenings}
						</Link>
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
