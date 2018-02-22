import {
  HEADER_TOGGLE,
  TOGGLE_PANEL_CONST,
  TOGGLE_CONFIRM_MODAL
} from 'constants/toggleConst';

export const headerToggle = () => {
  return {
    type: HEADER_TOGGLE
  };
};

export const togglePanel = () => {
  return {
    type: TOGGLE_PANEL_CONST
  };
};

export const toggleConfirmModal = () => {
  return {
    type: TOGGLE_CONFIRM_MODAL
  };
};
