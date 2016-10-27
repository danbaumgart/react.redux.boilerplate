import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import registration from './registrationReducer';
import navbarCollapsed from './navbarReducer';
import login from './loginReducer';
import links from './linksReducers';
import alerts from './alertsReducer';


const reducer = combineReducers({
  ajaxCallsInProgress,
  navbarCollapsed,
  registration,
  login,
  links,
  alerts
});

export default reducer;
