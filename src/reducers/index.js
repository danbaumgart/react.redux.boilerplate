import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import log from './logReducer';
import schema from './schemaReducer';
import account from './accountReducer';
import courses from './courseReducer';
import authors from './authorReducer';
import navbarCollapsed from './navbarReducer';
import accounts from './accountsReducer';
import login from './loginReducer';
import {reducer as form} from 'redux-form';


const reducer = combineReducers({
  ajaxCallsInProgress,
  log,
  courses,
  authors,
  navbarCollapsed,
  schema,
  account,
  accounts,
  login,
  form
});

export default reducer;
