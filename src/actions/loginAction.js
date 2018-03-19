import {
  SET_FB_STATUS
} from 'constants/loginConst';

export const setFBStatus = (payload) => {
  return {
    type: SET_FB_STATUS,
    payload
  };
};

