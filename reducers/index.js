import { combineReducers } from 'redux';
import auth from './auth';
import navbar from './navbar';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  auth,
  navbar,
  sidebar,
});

export default rootReducer;
