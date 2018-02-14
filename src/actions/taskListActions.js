import {
  ADD_TASK_TO_LIST,
  REMOVE_TASK_FROM_LIST
} from 'constants/taskListConst';

export const addTaskToList = (payload) => {
  return {
    type: ADD_TASK_TO_LIST,
    payload
  };
};

export const removeTaskFromList = payload => {
  return {
    type: REMOVE_TASK_FROM_LIST,
    payload
  };
};
