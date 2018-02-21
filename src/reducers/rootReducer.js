import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {taskPanel} from './taskPanelReducer';
import {userDetails} from './userReducer';
import {taskListItems} from './taskListReducer';
import {togglers} from './toggleReducer';
import {history} from './historyReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  loading,
  taskPanel,
  userDetails,
  taskListItems,
  togglers,
  history,
  form: formReducer
});
