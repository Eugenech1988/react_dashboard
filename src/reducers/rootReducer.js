import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {taskPanel, currentTaskDetails} from './taskPanelReducer';
import {userDetails} from './userReducer';
import {taskListItems} from './taskListReducer';

export default combineReducers({
  loading,
  taskPanel,
  userDetails,
  currentTaskDetails,
  taskListItems
});
