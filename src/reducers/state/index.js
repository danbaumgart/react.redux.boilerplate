import _appointment from './appointmentState';
import _contact from './contactState';
import _email from './emailState';
import _location from './locationState';
import _phone from './phoneState';
const state = {
    appointment: _appointment,
    contact: _contact,
    email: _email,
    location: _location,
    phone: _phone
};
export const {appointment, contact, email, location, phone} = state;
