import {
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST
} from 'constants/taskListConst';

export const taskListItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_TO_LIST:
      return [action.payload, ...state];
    case REMOVE_TASK_FROM_LIST:
      return state.filter(elem => elem.id !== parseInt(action.payload));
    default:
      return state;
  }
};
