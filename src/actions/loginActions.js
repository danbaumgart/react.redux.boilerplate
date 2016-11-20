import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';

function loginSuccess(account) {
  return {type: types.LOGIN_SUCCESS, payload: account, timestamp:Timestamp()};
}
function loginError() {
  return {type: types.LOGIN_ERROR, timestamp:Timestamp()};
}
function updateLoginForm(loginField) {
  return {type: types.UPDATE_LOGIN_FORM, payload: loginField};
}

export function login({emailAddress, password}) {
  return function (dispatch) {
    return accountApi.loadAccount({emailAddress, password})
      .then((res)=>dispatch(loginSuccess(res)))
      .catch((err)=>dispatch(loginError()));
  };
}
export function changeLoginForm(form) {
  return function (dispatch) {
    dispatch(updateLoginForm(form));
  };
}
