import {
  SET_FB_STATUS,
  SET_GOOGLE_STATUS,
  SET_GOOGLE_DETAILS
} from 'constants/loginConst';

const initialState = {
  isFBLoggedIn: false,
  isGoogleLoggedIn: false,
  userName: ''
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOOGLE_STATUS:
      localStorage.setItem('GoogleLogin', JSON.stringify({...state, isFBLoggedIn: action.payload}));
      return {...state, isGoogleLoggedIn: action.payload};
    case SET_FB_STATUS:
      localStorage.setItem('FBLogin', JSON.stringify({...state, isFBLoggedIn: action.payload}));
      return {...state, isFBLoggedIn: action.payload};
    case SET_GOOGLE_DETAILS:
      localStorage.setItem('userDetails', JSON.stringify({...state, userName: action.payload}));
      return {...state, userName: action.payload};
    default:
      return {...state};
  }
};
