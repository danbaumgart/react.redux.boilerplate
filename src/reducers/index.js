import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import registration from './registrationReducer';
import navbarOpen from './navbarReducer';
import login from './loginReducer';
import links from './linksReducers';
import alerts from './alertsReducer';
import user from './userReducer';
const title = ()=> 'REACT REDUX SPA';
const reducer = combineReducers({
  title,
  ajaxCallsInProgress,
  navbarOpen,
  registration,
  login,
  user,
  links,
  alerts
});

export default reducer;
