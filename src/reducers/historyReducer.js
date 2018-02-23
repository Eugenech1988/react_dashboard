import {
  ADD_ITEM_TO_HISTORY,
  SET_HISTORY
} from 'constants/historyConst';

export const history = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_HISTORY:
      localStorage.setItem('listHistory', JSON.stringify([action.payload, ...state] ));
      return [...state, action.payload];
    case SET_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
