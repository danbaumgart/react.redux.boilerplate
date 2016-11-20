import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import {toastError, toastSuccess} from './alertsActions';
import {initializeForm} from '../utils/forms';
import {schema} from '../mock/db/accounts';

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
function initializeRegistration({registration}){
  return {type: types.INITIALIZE_REGISTRATION, payload: registration};
}

export function initializeRegistrationStore(){
  return function(dispatch){
    let registration = Object.assign(initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword'), {schema});
    dispatch(initializeRegistration({registration}));
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
    return accountApi.createAccount(account).then(res => {
        dispatch(toastSuccess(res));
        dispatch(registrationSuccess(initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword')));
      }).catch(err => {
        dispatch(ajaxCallError(err));
        dispatch(updateRegistrationErrors(err));
        dispatch(toastError(err));
      });
  }
}
export const validateAsync = ({emailAddress=''}) => Promise.all([
    accountApi.checkAvailability(emailAddress)
  ]).then(result => result[0] ? {emailAddress: result[0]} : null);


