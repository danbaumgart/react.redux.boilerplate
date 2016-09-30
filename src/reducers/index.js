import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import log from './logReducer';
import schema from './schemaReducer';
import account from './accountReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import navbarCollapsed from './navbarReducer';
const reducer = combineReducers({
  ajaxCallsInProgress,
  log,
  courses,
  authors,
  navbarCollapsed,
  schema,
  account
});

export default reducer;
