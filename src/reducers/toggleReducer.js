import {
  HEADER_TOGGLE,
  PANEL_TOGGLE,
  CONFIRM_MODAL_TOGGLE,
  EDIT_TOGGLE,
  MAP_TOGGLE
} from 'constants/toggleConst';

const initialState = {
  isHeaderOpened: false,
  isPanelOpened: false,
  isConfirmModalOpened: false,
  isEditOpened: false,
  isMapOpened: true
};

export const togglers = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TOGGLE:
      return {...state, isEditOpened: action.payload};
    case PANEL_TOGGLE:
      return {...state, isPanelOpened: !state.isPanelOpened};
    case HEADER_TOGGLE:
		  return {...state, isHeaderOpened: !state.isHeaderOpened};
    case MAP_TOGGLE:
      return {...state, isMapOpened: !state.isMapOpened};
    case CONFIRM_MODAL_TOGGLE:
      return {...state, isConfirmModalOpened: !state.isConfirmModalOpened};
    default:
		  return state;
  }
};
