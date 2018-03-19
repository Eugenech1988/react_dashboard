import {
  SET_FB_STATUS,
  SET_GOOGLE_STATUS,
  SET_GOOGLE_DETAILS
} from 'constants/loginConst';

export const setFBStatus = (payload) => {
  return {
    type: SET_FB_STATUS,
    payload
  };
};

export const setGoogleStatus = (payload) => {
  return {
    type: SET_GOOGLE_STATUS,
    payload
  };
};

export const setGoogleDetails = (payload) => {
  return {
    type: SET_GOOGLE_DETAILS,
    payload
  };
};
