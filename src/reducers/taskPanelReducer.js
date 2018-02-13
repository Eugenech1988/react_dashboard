import {
  TOGGLE_PANEL_CONST,
  SET_TASK_DETAILS,
  SET_TASK_ADDRESS,
  SET_ACTIVE_SERVICE_ITEM,
  SET_AVAILABLE_TASK,
  SET_TASK_ITEM_DETAILS
} from 'constants/panelConst';

const initialState = {
  isPanelOpened: false,
  taskDescription: '',
  taskAddress: '',
  serviceItemText: '',
  availableTask: ''
};

export const taskPanel = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PANEL_CONST:
      return {...state, isPanelOpened: !state.isPanelOpened};
    case SET_TASK_DETAILS:
      return {...state, taskDescription: action.payload};
    case SET_TASK_ADDRESS:
      return {...state, taskAddress: action.payload};
    case SET_ACTIVE_SERVICE_ITEM:
      return {...state, serviceItemText: action.serviceItemText};
    case SET_AVAILABLE_TASK:
      return {...state, availableTask: action.availableTask};
    default:
      return {...state};
  }
};
