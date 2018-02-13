import {
  TOGGLE_PANEL_CONST,
  SET_TASK_DETAILS,
  SET_TASK_ADDRESS,
  SET_ACTIVE_SERVICE_ITEM,
  SET_AVAILABLE_TASK,
  SET_TASK_ITEM_DETAILS
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

export const setTaskAddress = (payload) => {
  return {
    type: SET_TASK_ADDRESS,
    payload
  };
};

export const setActiveServiceItem = (serviceItemText) => {
  return {
    type: SET_ACTIVE_SERVICE_ITEM,
    serviceItemText
  };
};

export const setAvailableTasks = (availableTask) => {
  return {
    type: SET_AVAILABLE_TASK,
    availableTask
  };
};
