import {
  ADD_ITEM_TO_HISTORY,
  SET_HISTORY
} from 'constants/historyConst';

export const addItemToHistory = payload => {
  return {
    type: ADD_ITEM_TO_HISTORY,
    payload
  };
};

export const setHistory = payload => {
  return {
    type: SET_HISTORY,
    payload
  };
};
