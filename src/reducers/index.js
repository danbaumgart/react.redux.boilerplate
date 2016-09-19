import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import log from './logReducer';
import courses from './courseReducer';
import authors from './authorReducer';

const reducer = combineReducers({
  ajaxCallsInProgress,
  log,
  courses,
  authors
});

export default reducer;
