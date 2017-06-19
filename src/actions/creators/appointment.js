import ACTIONS from '../types/appointments';
import {DateTime} from '../../utils/model/dateTimeModel';
function _updateAppointmentDate(date){
    return {type: ACTIONS.UPDATE_APPOINTMENT_DATE, payload: date};
}
function _updateAppointmentTime(time){
    return {type: ACTIONS.UPDATE_APPOINTMENT_TIME, payload: time};
}
function _updateAppointmentErrorInfo(errorInfo){
    return {type: ACTIONS.UPDATE_APPOINTMENT_ERROR_INFO, payload: errorInfo};
}
function _updateAppointmentFlexible(flexible){
    return {type: ACTIONS.UPDATE_APPOINTMENT_FLEXIBLE, payload: flexible};
}
function _updateAppointmentLocation(location){
    return {type: ACTIONS.UPDATE_APPOINTMENT_LOCATION, payload: location};
}
function _updateAppointmentDetails(details){
    return {type: ACTIONS.UPDATE_APPOINTMENT_DETAILS, payload: details};
}
function _updateAppointmentConfirmation(confirmation){
    return {type: ACTIONS.UPDATE_APPOINTMENT_CONFIRMATION, payload: confirmation};
}
export const updateAppointmentDate = date => function(dispatch){
    dispatch(_updateAppointmentDate(date ? DateTime.ToDateModel(date) : null));
};
export const updateAppointmentTime = time => function(dispatch){
    dispatch(_updateAppointmentTime(time ? DateTime.ToTimeModel(time) : null));
};
export const updateAppointmentDetails = details => function(dispatch){
    dispatch(_updateAppointmentDetails(details));
};
export const updateAppointmentFlexible = flexible => function(dispatch){
    dispatch(_updateAppointmentFlexible(flexible));
};
export const updateAppointmentLocation = location => function(dispatch){
    dispatch(_updateAppointmentLocation(location));
};
export const updateAppointmentConfirmation = confirmation => function(dispatch){
    dispatch(_updateAppointmentConfirmation(confirmation));
};
export const updateAppointmentErrorInfo = errorInfo => function(dispatch){
    dispatch(_updateAppointmentErrorInfo(errorInfo));
};
