import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import {showErrorAlerts, showSuccessAlerts} from './alertsActions';
import {initializeForm} from '../utils/forms';
import {registration} from '../mock/db/accounts';
  
function registrationSuccess(initialValues) {
  return {type: types.REGISTRATION_SUCCESS, payload: initialValues};
}
function updateRegistration(registration) {
  return {type: types.UPDATE_REGISTRATION, payload: registration};
}
function updateRegistrationForm(form) {
  return {type: types.UPDATE_REGISTRATION_FORM, payload: form};
}
function updateRegistrationValue(field) {
  return {type: types.UPDATE_REGISTRATION_VALUE, payload: field};
}
function updateRegistrationErrors(errors) {
  return {type: types.UPDATE_REGISTRATION_ERRORS, payload: errors};
}
function initializeRegistration(registration){
  return {type: types.INITIALIZE_REGISTRATION, payload: registration};
}

export function initializeRegistrationStore(){
  return function(dispatch){
    let registrationState = initializeForm(registration, 'emailAddress', 'firstName', 'lastName', 'password', 'confirmPassword');
    dispatch(initializeRegistration(registrationState));
  }
}

export function setRegistration({errors = {}, form, values}){
  const registration = {form, errors, values};
  return function (dispatch){
    dispatch(updateRegistration(registration));
  }
}

export function setRegistrationValue({name, value}){
  return function(dispatch){
    return dispatch(updateRegistrationValue({[name]: value}));
  }
}

export function setRegistrationForm(form){
  return function (dispatch){
    dispatch(updateRegistrationForm(form));
  }
}

export function createAccount(account) {
  return function (dispatch) {
    return accountApi.createAccount(account).then(
      result => {
        console.log("SUCCESS",result);
        Promise.all([
          dispatch(showSuccessAlerts(result.messages)),
          dispatch(registrationSuccess(initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword')))])
      },
          errors => {
            console.log("ERRORS",errors);
            Promise.all([
            dispatch(updateRegistrationErrors(errors.data)),
            dispatch(showErrorAlerts(errors.messages))])
      }
    );
  }
}
export const validateAsync = ({emailAddress=''}) => Promise.all([
    accountApi.checkAvailability(emailAddress)
  ]).then(result => result[0] ? {emailAddress: result[0]} : null);


