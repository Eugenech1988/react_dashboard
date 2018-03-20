import {
  SET_GOOGLE_DETAILS,
  SET_FB_DETAILS
} from 'constants/loginConst';

const initialState = {
  googleUserName: null,
  FBUserName: null
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOOGLE_DETAILS:
      localStorage.setItem('googleUserName', JSON.stringify(action.payload));
      return {...state, googleUserName: action.payload};
    case SET_FB_DETAILS:
      localStorage.setItem('FBUserName', JSON.stringify(action.payload));
      return {...state, FBUserName: action.payload};
    default:
      return {...state};
  }
};
