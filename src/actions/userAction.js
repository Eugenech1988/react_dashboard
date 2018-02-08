import {
  GET_USER_COORDS_ERROR,
  GET_USER_COORDS_SUCCESS,
  SET_CUSTOM_COORDS
} from 'constants/userConst';

import {getUserPositionApi} from 'helpers/helpers';
import {startLoading, finishLoading} from './loaderAction';

export const getUserCoordsSuccess = (lat, lng) => {
  return ({
    lat,
    lng,
    type: GET_USER_COORDS_SUCCESS
  });
};

export const getUserCoordsError = () => {
  return ({
    type: GET_USER_COORDS_ERROR
  });
};

export const setCustomCoords = (lat, lng) => {
  return ({
    lat,
    lng,
    type: SET_CUSTOM_COORDS
  });
};

export const getUserPosition = () => dispatch => {
  dispatch(startLoading());
  getUserPositionApi()
    .then((res) => {
      console.log(res);
      const coords = res.coords;
      dispatch(getUserCoordsSuccess(coords.latitude, coords.longitude));
      dispatch(finishLoading());
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(getUserCoordsError());
      dispatch(finishLoading());
    });
};
