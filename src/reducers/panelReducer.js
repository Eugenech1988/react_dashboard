import {
  TOGGLE_PANEL_CONST
} from 'constants/panelConst';

const initialState = {
  panelToggle: false
};

export const togglePanel = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL_CONST:
      return {...state, panelToggle: !state.panelToggle};
    default:
      return {...state};
  }
};
