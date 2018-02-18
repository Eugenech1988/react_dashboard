import {
  ADD_ITEM_TO_HISTORY
} from 'constants/historyConst';

export const refreshedHistory = (state = [], action) => {
  //eslint-disable-next-line
  switch (action.type) {
    case ADD_ITEM_TO_HISTORY:
      localStorage.setItem('listHistory', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    default:
      return state;
  }
};
