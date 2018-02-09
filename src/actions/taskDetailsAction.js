import {
  TOGGLE_PANEL_CONST,
  SET_TASK_DETAILS
} from 'constants/panelConst';

export const togglePanel = (payload) => {
  return {
    type: TOGGLE_PANEL_CONST,
    payload
  };
};

export const setTaskDescription = (payload) => {
  return {
    type: SET_TASK_DETAILS,
    payload
  };
};
