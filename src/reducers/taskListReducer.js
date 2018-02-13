import {
  ADD_TASK_TO_LIST
} from "constants/taskListConst";

const initalState = [];

export const taskListItems = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TASK_TO_LIST:
      return {...state, taskListItems:[action.payload, ...state.taskListItems]};
    default:
      return {...state};
  }
};
