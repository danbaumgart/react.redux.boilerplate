import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import {toastError, toastSuccess} from './alertsActions';
import {initializeForm} from '../utils/forms';
import {schema} from '../mock/db/accounts';
import debounce from '../utils/debounce';
function registrationSuccess() {
  return {type: types.REGISTRATION_SUCCESS};
}
export function updateRegistrationForm(form) {
  return {type: types.UPDATE_REGISTRATION_FORM, payload: {form}};
}
export function updateRegistrationField({name, value}) {
  return {type: types.UPDATE_REGISTRATION_FIELD, payload: {[name]: value}};
}
export function updateRegistrationErrors({name, value, validator}) {
  return {type: types.UPDATE_REGISTRATION_ERRORS, payload: {[name]: validator.validateField(name, value)}};
}
function initializeRegistration({form, errors}){
  return {type: types.INITIALIZE_REGISTRATION, payload: Object.assign({form, errors, schema})};
}
export function initializeRegistrationStore(){
  return function(dispatch){
    dispatch(initializeRegistration(initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword')));
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
export function checkAvailability(){
  debounce((emailAddress) => accountApi.checkAvailability(emailAddress), 250);
}

