import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import registration from './registrationReducer';
import navbarCollapsed from './navbarReducer';
import login from './loginReducer';
import links from './linksReducers';
import alerts from './alertsReducer';
import contact from './contactReducer';
import errorInfo from './errorInfoReducer';
import location from './locationReducer';
import email from './emailReducer';
import confirmations from './confirmationsReducer';
import appointment from './appointmentReducer';
import phone from './phoneReducer';
import states from './statesReducer';
import countries from './countriesReducer';
import universities from './universitiesReducer';
const reducer = combineReducers({
    errorInfo,
    appointment,
    contact,
    email,
    phone,
    universities,
    location,
    confirmations,
    states,
    countries,
    ajaxCallsInProgress,
    navbarCollapsed,
    registration,
    login,
    links,
    alerts
});

export default reducer;
