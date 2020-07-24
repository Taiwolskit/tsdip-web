import { combineReducers } from 'redux';
import navbar from './navbar';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  navbar,
  sidebar,
});

export default rootReducer;
