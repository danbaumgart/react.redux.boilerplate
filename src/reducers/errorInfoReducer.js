import {UPDATE_CONTACT_ERROR_INFO} from '../actions/types/contacts';
import {UPDATE_APPOINTMENT_ERROR_INFO} from '../actions/types/appointments';
import {UPDATE_LOCATION_ERROR_INFO} from '../actions/types/locations';
import initialState from './initialState';

export default function errorInfo(state = initialState.errorInfo, action) {
    switch(action.type){
        case UPDATE_CONTACT_ERROR_INFO:
            return Object.assign({}, state, {contact: Object.assign({}, state.contact, action.payload)});
        case UPDATE_APPOINTMENT_ERROR_INFO:
            return Object.assign({}, state, {appointment: Object.assign({}, state.appointment, action.payload)});
        case UPDATE_LOCATION_ERROR_INFO:
            return Object.assign({}, state, {location: Object.assign({}, state.location, action.payload)});
        default:
            return state;
    }
}
