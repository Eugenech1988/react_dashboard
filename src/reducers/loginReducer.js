import {
  SET_FB_STATUS
} from 'constants/loginConst';

const initialState = {
  isFBLoggedIn: false
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_FB_STATUS:
      localStorage.setItem('FBLogin', JSON.stringify({...state, isFBLoggedIn: action.payload}));
      return {...state, isFBLoggedIn: action.payload};
    default:
      return {...state};
  }
};
