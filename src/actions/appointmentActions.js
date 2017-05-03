import * as types from './actionTypes';

function changeAppointmentForm(appointment){
    return {type:types.TOGGLE_NAVBAR, payload: appointment};
}
export function updateAppointmentForm(appointment){
    return function(dispatch){
        dispatch(changeAppointmentForm(appointment));
    }
}
