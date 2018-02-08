import {
	TOGGLE_PANEL_CONST
} from 'constants/panelConst';

export const togglePanel = (payload) => {
	return {
		type: TOGGLE_PANEL_CONST,
		payload
	};
};
