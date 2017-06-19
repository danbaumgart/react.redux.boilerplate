import STATUS from '../services/constants/emailStatus';
import {appointment, email, contact, location, phone, errorInfo} from './state';
export default {
    errorInfo,
    contact,
    location,
    email,
    appointment,
    phone,
    countries: [],
    states: [],
    confirmations: [],
    universities: [],
    ajaxCallsInProgress: 0,
    navbarCollapsed: true,
    registration: {},
    login: {},
    links: {},
    alerts: [],
    user: {},
};
