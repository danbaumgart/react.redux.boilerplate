import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import {toastError, toastSuccess} from './alertsActions';
import {initializeForm} from '../utils/forms';
import {login} from '../mock/db/schema';

function loginSuccess(account) {
  return {type: types.LOGIN_SUCCESS, payload: account};
}
function initializeLogin({login}){
  return {type: types.INITIALIZE_LOGIN, payload: login};
}
function updateLoginForm(form) {
  return {type: types.UPDATE_LOGIN_FORM, payload: form};
}
function updateLoginValue(field) {
  return {type: types.UPDATE_LOGIN_VALUE, payload: field};
}

export function initializeLoginStore(){
  return function(dispatch){
    let login = Object.assign(initializeForm('emailAddress', 'password', 'rememberMe'), {schema: login});
    dispatch(initializeLogin({login}));
  }
}

export function doLogin({emailAddress, password}) {
  return function (dispatch) {
    return accountApi.getAccount({emailAddress, password})
      .then((res)=>dispatch(loginSuccess(res)));
  };
}

export function setLoginValue({name, value}){
  return function(dispatch){
    return dispatch(updateLoginValue({[name]: value}));
  }
}

export function setLoginForm(form){
  return function (dispatch){
    dispatch(updateLoginForm(form));
  }
}
