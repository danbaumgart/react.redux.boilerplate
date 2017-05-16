import STATUS from '../services/constants/emailStatus';
export default {
    ajaxCallsInProgress: 0,
    navbarCollapsed: true,
    registration: {},
    login: {},
    links: {},
    alerts: [],
    user: {},
    email: {
        emailAddress: '',
        status: STATUS.UNAUTHENTICATED
    },
    contact: {
        firstName: '',
        lastName: ''
    },
    events: [],
    countries: [],
    states: [],
    appointment: {
        time: '',
        date: '',
        flexible: ''
    },
    phone: {
        number: '',
        extension: ''
    },
    instution: {
        type: null,
        name: ''
    },
    location: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    }
};
