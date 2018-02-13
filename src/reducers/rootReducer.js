import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {taskPanel} from './taskPanelReducer';
import {userDetails} from './userReducer';
import {taskListItems} from './taskListReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  loading,
  taskPanel,
  userDetails,
  taskListItems,
  form: formReducer
});
