import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import log from './logReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import navbarCollapsed from './navbarReducer';
const reducer = combineReducers({
  ajaxCallsInProgress,
  log,
  courses,
  authors,
  navbarCollapsed
});

export default reducer;
