import {
  TOGGLE_PANEL_CONST,
  SET_TASK_DETAILS,
  SET_TASK_ADDRESS,
  SET_ACTIVE_SERVICE_ITEM,
  SET_AVIABLE_TASK
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

export const setAviableTasks = (availableText) => {
  return {
    type: SET_AVIABLE_TASK,
    availableText
  };
};
