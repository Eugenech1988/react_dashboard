import {HEADER_TOGGLE, TOGGLE_PANEL_CONST, TOGGLE_CONFIRM_MODAL} from 'constants/toggleConst';

const initialState = {
  isHeaderOpened: false,
  isPanelOpened: false,
  isConfirmModalOpened: false
};

export const togglers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL_CONST:
      return {...state, isPanelOpened: !state.isPanelOpened};
    case HEADER_TOGGLE:
		  return {...state, isHeaderOpened: !state.isHeaderOpened};
    case TOGGLE_CONFIRM_MODAL:
      return {...state, isConfirmModalOpened: !state.isConfirmModalOpened};
    default:
		  return state;
  }
};
