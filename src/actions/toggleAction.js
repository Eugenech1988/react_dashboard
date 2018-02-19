import {
  HEADER_TOGGLE,
  TOGGLE_PANEL_CONST
} from 'constants/toggleConst';

export const headerToggle = () => {
  return {
    type: HEADER_TOGGLE
  };
};

export const togglePanel = (payload) => {
  return {
    type: TOGGLE_PANEL_CONST,
    payload
  };
};
