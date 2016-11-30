import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import registration from './registrationReducer';
import navbarCollapsed from './navbarReducer';
import login from './loginReducer';
import links from './linksReducers';
import alerts from './alertsReducer';
import user from './userReducer';
const title = ()=> 'REACT REDUX SPA';
const reducer = combineReducers({
  title,
  ajaxCallsInProgress,
  navbarCollapsed,
  registration,
  login,
  user,
  links,
  alerts
});

export default reducer;
