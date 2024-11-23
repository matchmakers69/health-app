import { styled } from "@mui/material/styles";
import { Dialog as MUIDialog, DialogTitle as MUIDialogTitle } from "@mui/material";

export const BootstrapDialogContent = styled(MUIDialog, {
	name: "MuiCustomModal",
	slot: "MuiCustomModal",
	skipSx: true,
})((props) => ({
	"& .MuiPaper-root": {
		minWidth: 320,
		maxWidth: "100%",
		[props.theme.breakpoints.up("sm")]: {
			minWidth: 588,
		},
		[props.theme.breakpoints.up("md")]: {
			minWidth: 720,
		},
		[props.theme.breakpoints.up("lg")]: {
			minWidth: 800,
		},
	},
	"& .MuiDialogContent-root": {
		padding: props.theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: props.theme.spacing(1),
	},
}));

export const ModalTitle = styled(MUIDialogTitle, {
	name: "MuiCustomModalTitle",
	slot: "MuiCustomModalTitle",
	skipSx: true,
})((props) => ({
	margin: 0,
	fontSize: "2rem",
	[props.theme.breakpoints.up("sm")]: {
		fontSize: "2.4rem",
	},
}));
