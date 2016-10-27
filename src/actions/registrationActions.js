import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';

function loadRegistrationSchema(schema) {
  return {type: types.LOAD_REGISTRATION_SCHEMA, payload: schema, timestamp:Timestamp()};
}
function registrationSuccess(account) {
  return {type: types.REGISTRATION_SUCCESS, payload: account, timestamp:Timestamp()};
}
function registrationError(account) {
  return {type: types.REGISTRATION_ERROR, payload: account, timestamp:Timestamp()};
}
function updateRegistrationForm(registrationForm) {
  return {type: types.UPDATE_REGISTRATION_FORM, payload: registrationForm};
}
function updateRegistrationErrors(registrationErrors) {
  return {type: types.UPDATE_REGISTRATION_ERRORS, payload: registrationErrors};
}
export function loadSchema(){
  return function(dispatch){
    return accountApi.loadSchema()
      .then(result => dispatch(loadRegistrationSchema(result)));
  };
}

export function createAccount(account) {
  return function (dispatch) {
    return accountApi.createAccount(account)
      .then(res => dispatch(registrationSuccess(res)))
      .catch(err=>{
        dispatch(ajaxCallError(err));
        dispatch(registrationError(account));
        throw(err);
      });
  };
}
function checkAvailability({emailAddress}){
  return accountApi.checkAvailability(emailAddress)
    .then(res => res)
    .catch(err => err);
}
export function changeRegistrationForm(form) {
  return function (dispatch) {
    return Promise.all([
      Promise.resolve(dispatch(updateRegistrationForm(form))),
      checkAvailability(form)])
      .then(result => result[1]);
  }
}
export function changeRegistrationErrors(errors){
  return function (dispatch) {
    dispatch(updateRegistrationErrors(errors));
  };
}
