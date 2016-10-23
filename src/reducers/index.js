import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import log from './logReducer';
import registration from './accountReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import navbarCollapsed from './navbarReducer';
import login from './loginReducer';
import links from './linksReducers';

const reducer = combineReducers({
  ajaxCallsInProgress,
  log,
  courses,
  authors,
  navbarCollapsed,
  registration,
  login,
  links
});

export default reducer;
