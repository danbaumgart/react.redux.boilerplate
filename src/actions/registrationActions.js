import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';
import {toastError, toastSuccess} from './alertsActions';

function updateRegistrationSchema({emailAddress={}, lastName={}, firstName={}, password={}, confirmPassword={}}) {
  return {
    type: types.UPDATE_REGISTRATION_SCHEMA,
    payload: Object.assign({}, {
      emailAddress,
      lastName,
      firstName,
      password,
      confirmPassword})
  };
}
function registrationSuccess() {
  return {
    type: types.REGISTRATION_SUCCESS,
    payload: Object.assign({}, {
      form: {
        emailAddress: '',
        lastName: '',
        firstName: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        emailAddress: [],
        lastName: [],
        firstName: [],
        password: [],
        confirmPassword: []
      }
    })
  };
}
function updateRegistrationForm({emailAddress='', lastName='', firstName='', password='', confirmPassword=''}) {
  return {
    type: types.UPDATE_REGISTRATION_FORM,
    payload: Object.assign({}, {
      emailAddress,
      lastName,
      firstName,
      password,
      confirmPassword
    })
  };
}
function updateRegistrationErrors({emailAddress=[], lastName=[], firstName=[], password=[], confirmPassword=[]}) {
  return {
    type: types.UPDATE_REGISTRATION_ERRORS,
    payload: Object.assign({},{
      emailAddress,
      lastName,
      firstName,
      password,
      confirmPassword
    })
  };
}

export function loadSchema(){
  return function(dispatch){
    return accountApi.loadSchema().then(result =>
      dispatch(updateRegistrationSchema(result)));
  }
}
export function updateSchema({schema}){
  return function(dispatch){
    return Promise.resolve(dispatch(updateRegistrationSchema(schema)));
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
export function checkAvailability({emailAddress = ''}){
  return accountApi.checkAvailability({emailAddress});
}
export function changeRegistrationForm(form) {
  return function (dispatch) {
    return Promise.resolve(dispatch(updateRegistrationForm(form)));
  }
}
export function changeRegistrationErrors({emailAddress=[], lastName=[], firstName=[], password=[], confirmPassword=[]}){
  return function (dispatch) {
    return Promise.resolve(dispatch(updateRegistrationErrors(Object.assign({}, {
      emailAddress,
      lastName,
      firstName,
      password,
      confirmPassword}))));
  }
}
