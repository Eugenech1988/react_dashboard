import {
  SET_GOOGLE_DETAILS,
  SET_FB_DETAILS
} from 'constants/loginConst';

export const setGoogleDetails = (payload) => {
  return {
    type: SET_GOOGLE_DETAILS,
    payload
  };
};

export const setFBDetails = (payload) => {
  return {
    type: SET_FB_DETAILS,
    payload
  };
};
