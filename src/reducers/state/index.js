import _appointment from './appointmentState';
import _contact from './contactState';
import _email from './emailState';
import _location from './locationState';
import _phone from './phoneState';
import _errorInfo from './errorInfo';
const state = {
    appointment: _appointment,
    contact: _contact,
    email: _email,
    location: _location,
    phone: _phone,
    errorInfo: _errorInfo
};
export const {appointment, contact, email, location, phone, errorInfo} = state;
