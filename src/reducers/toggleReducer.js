import {HEADER_TOGGLE, TOGGLE_PANEL_CONST} from 'constants/toggleConst';

const initialState = {
  isHeaderOpened: false,
  isPanelOpened: false
};

export const togglers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL_CONST:
      return {...state, isPanelOpened: !state.isPanelOpened};
    case HEADER_TOGGLE:
		  return {...state, isHeaderOpened: !state.isHeaderOpened};
    default:
		  return state;
	}
};
