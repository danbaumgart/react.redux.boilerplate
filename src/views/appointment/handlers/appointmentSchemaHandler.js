import APPOINTMENT_STEPS from '../constants/appointmentSteps';
import AppointmentSchema from '../../../config/schema/appointment';
import ContactSchema from '../../../config/schema/contact';
import LocationSchema from '../../../config/schema/location';
export default {
    [APPOINTMENT_STEPS.SCHEDULING]: AppointmentSchema,
    [APPOINTMENT_STEPS.CONTACT]: ContactSchema,
    [APPOINTMENT_STEPS.LOCATION]: LocationSchema
};
