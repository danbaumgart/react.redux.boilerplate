import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import {toastError, toastSuccess} from './alertsActions';
import {initializeForm} from '../utils/forms';
import {schema} from '../mock/db/accounts';
import debounce from '../utils/debounce';
import vtypes from '../utils/enums/validation';

function registrationSuccess() {
  return {type: types.REGISTRATION_SUCCESS};
}
export function updateRegistrationForm({form, errors}) {
  return {type: types.UPDATE_REGISTRATION_FORM, payload: {form}};
}
export function updateRegistrationField({name, value}) {
  return {type: types.UPDATE_REGISTRATION_FIELD, payload: {[name]: value}};
}
export function updateRegistrationErrors({name, errors}) {
  return {type: types.UPDATE_REGISTRATION_ERRORS, payload: {[name]: errors}};
}
export function addRegistrationErrors(field, errors) {
  return {type: types.ADD_REGISTRATION_ERRORS, field: field, errors: errors};
}
export function removeRegistrationErrors(field, errors) {
  return {type: types.REMOVE_REGISTRATION_ERRORS, field: field, errors: errors};
}
function initializeRegistration({form, errors}){
  return {type: types.INITIALIZE_REGISTRATION, payload: Object.assign({form, errors, schema})};
}
export function initializeRegistrationStore(){
  return function(dispatch){
    let {form, errors} = initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword');
    dispatch(initializeRegistration({form, errors, schema}));
  }
}

export function changeRegistrationField({name, value}){
  return function(dispatch){
    return dispatch(updateRegistrationField({name, value}));
  }
}

export function createAccount(account) {
  return function (dispatch) {
    return accountApi.createAccount(account)
      .then(res => Promise.all([
        dispatch(registrationSuccess()),
        dispatch(toastSuccess("ACCOUNT REGISTERED"))
      ]).catch(err => Promise.all([
        dispatch(ajaxCallError(err)),
        dispatch(updateRegistrationErrors(account)),
        dispatch(toastError(err)),
        Promise.reject(err)])));
  }
}
export const validateAsync =({emailAddress=''})=> Promise.all([
      accountApi.checkAvailability(emailAddress)
  ]).then(result => result[0] ? {emailAddress: result} : null);


