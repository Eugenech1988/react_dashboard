import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {taskPanel} from './taskPanelReducer';
import {userDetails} from './userReducer';

export default combineReducers({
  loading,
  taskPanel,
  userDetails
});
