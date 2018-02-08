import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {togglePanel} from './panelReducer';
import {userDetails} from './userReducer';

export default combineReducers({
  loading,
  togglePanel,
  userDetails
});
