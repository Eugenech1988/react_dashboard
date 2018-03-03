import {
  CHECK_FB_STATUS
} from 'constants/loginConst';

export const checkFBStatus = (payload) => {
  return {
    type: CHECK_FB_STATUS,
    payload
  };
};

