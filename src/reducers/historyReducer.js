import {
  ADD_ITEM_TO_HISTORY
} from 'constants/historyConst';

export const history = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_HISTORY:
      localStorage.setItem('listHistory', JSON.stringify([action.payload, ...state] ));
      return [...state, action.payload];
    default:
      return state;
  }
};
