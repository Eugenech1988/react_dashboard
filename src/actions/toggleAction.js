import {
  HEADER_TOGGLE,
  PANEL_TOGGLE,
  CONFIRM_MODAL_TOGGLE,
  EDIT_TOGGLE
} from 'constants/toggleConst';

export const headerToggle = () => {
  return {
    type: HEADER_TOGGLE
  };
};

export const togglePanel = () => {
  return {
    type: PANEL_TOGGLE
  };
};

export const toggleConfirmModal = () => {
  return {
    type: CONFIRM_MODAL_TOGGLE
  };
};

export const editTaskToggle = (payload) => {
  return {
    type: EDIT_TOGGLE,
    payload
  };
};
