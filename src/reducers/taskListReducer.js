import {
  ADD_TASK_TO_LIST
} from 'constants/taskListConst';

export const taskListItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_TO_LIST:
      return [action.payload, ...state];
    default:
      return state;
  }
};
