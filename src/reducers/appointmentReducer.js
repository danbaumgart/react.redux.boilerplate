import ACTIONS from '../actions/types/appointmentActions';
import initialState from './initialState';
export default function appointment(state = initialState.appointment, action) {
    const {type, payload} = action;
	switch(type) {
        case ACTIONS.UPDATE_APPOINTMENT_DATE:
            return Object.assign({}, state, {
                date: payload
            });
        case ACTIONS.UPDATE_APPOINTMENT_TIME:
            return Object.assign({}, state, {
                time: payload
            });
        case ACTIONS.UPDATE_APPOINTMENT_FLEXIBLE:
            return Object.assign({}, state, {
                flexible: payload
            });
        case ACTIONS.UPDATE_APPOINTMENT_DETAILS:
            return Object.assign({}, state, {
                details: payload
            });
        default:
            return state;
    }
}
