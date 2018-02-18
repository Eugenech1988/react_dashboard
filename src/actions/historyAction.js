import {
  ADD_ITEM_TO_HISTORY
} from 'constants/historyConst';

export const addItemToHistory = payload => {
  return {
    type: ADD_ITEM_TO_HISTORY,
    payload
  };
};
