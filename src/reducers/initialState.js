import {UNAUTHENTICATED} from '../utils/constants/emailStatus';
export default {
  ajaxCallsInProgress: 0,
  navbarCollapsed: true,
  registration: {},
  login: {},
  links: {},
  alerts: [],
  user: {},
  contact: {
    firstName: null,
    lastName: null,
    phone: [],
    email: null,
    status: UNAUTHENTICATED
  },
  appointment: {
    time: null,
    date: null,
    flexible: false,
    cancelled: false,
    institutionId: null,
    contactId: null
  },
  phone: {
    number: null,
    extension: null
  },
  instution: {
    name: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    country: null
  },
  location: {
    id: null,
    institutionId: null,
    details: null
  }
};
