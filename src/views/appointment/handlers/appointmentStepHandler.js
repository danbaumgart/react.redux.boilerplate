import APPOINTMENT_STEPS from '../constants/appointmentSteps';
import SchedulePage from '../schedulePage';
import ContactPage from '../../contact/contactPage';
import LocationPage from '../../location/locationPage';
export default {
    [APPOINTMENT_STEPS.SCHEDULING]: SchedulePage,
    [APPOINTMENT_STEPS.CONTACT]: ContactPage,
    [APPOINTMENT_STEPS.LOCATION]: LocationPage
};
