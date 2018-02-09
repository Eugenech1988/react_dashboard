import {
  TOGGLE_PANEL_CONST,
  SET_TASK_DETAILS
} from 'constants/panelConst';

const initialState = {
  isPanelOpened: false,
  taskDescription: ''
};

export const taskPanel = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL_CONST:
      return {...state, isPanelOpened: !state.isPanelOpened};
    case SET_TASK_DETAILS:
      return {...state, taskDescription: action.payload};
    default:
      return {...state};
  }
};
