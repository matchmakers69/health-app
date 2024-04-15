import { type DashboardLayoutContextAction, type DashboardLayoutContextState } from "../defs";

export const reducer = (state: DashboardLayoutContextState, action: DashboardLayoutContextAction) => {
	switch (action.type) {
		case "TOGGLE_SIDEBAR":
			return {
				...state,
				isSidebarInView: action.payload,
			};

		default:
			return state;
	}
};
