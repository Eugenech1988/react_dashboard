import {
  ADD_TASK_TO_LIST,
  REMOVE_TASK_TO_LIST
} from 'constants/taskListConst';

export const addTaskToList = (payload) => {
  return {
    type: ADD_TASK_TO_LIST,
    payload
  };
};
