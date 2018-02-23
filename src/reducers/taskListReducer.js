import {
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST,
  SET_TASK_LIST
} from 'constants/taskListConst';

export const taskListItems = (state = [], action) => {
  switch (action.type) {
    case SET_TASK_LIST:
      return action.payload;
    case ADD_TASK_TO_LIST:
      localStorage.setItem('currentTaskList', JSON.stringify([action.payload, ...state]));
      return [action.payload, ...state];
    case REMOVE_TASK_FROM_LIST:
      localStorage.setItem('currentTaskList', JSON.stringify(state.filter(elem => elem.id !== parseInt(action.payload))));
      return state.filter(elem => elem.id !== parseInt(action.payload));
    default:
      return state;
  }
};
