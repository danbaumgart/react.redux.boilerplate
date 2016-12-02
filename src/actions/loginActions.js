import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {showErrorAlerts, showSuccessAlerts} from './alertsActions';
import {buildForm, buildFormModel} from '../utils/forms';
import {login} from '../mock/db/accounts';
import {SetTimer} from '../utils/timestamp';
import roles from '../enums/roles';

function loginSuccess({login, user}) {
  return {type: types.LOGIN_SUCCESS, payload: {login, user}};
}
function logoutUser(){
  return {type: types.LOGOUT_SUCCESS, payload: {}}
}
function initializeLogin(login) {
  return {type: types.INITIALIZE_LOGIN, payload: login};
}
function updateLoginForm(form) {
  return {type: types.UPDATE_LOGIN_FORM, payload: form};
}
function updateLoginValue(field) {
  return {type: types.UPDATE_LOGIN_VALUE, payload: field};
}

export function initializeLoginStore() {
  return function (dispatch) {
    const model = buildFormModel(login, 'emailAddress', 'password', {rememberMe: false});
    console.log("LOGIN STORE", model);
    dispatch(initializeLogin(model));
  }
}

export function loginAccount({emailAddress, password, rememberMe = false}) {
  const minutes = rememberMe ? 15 : 1;
  return function (dispatch) {
    return accountApi.getAccount({emailAddress, password})
      .then(
        user => Promise.all([
          dispatch(loginSuccess({
            user: Object.assign({identity: user.data, timestamp: SetTimer({minutes}).raw, role: roles.USER}),
            login: buildForm({model: {emailAddress: '', password: '', rememberMe: false}})})),
          dispatch(showSuccessAlerts(user.messages))]),
        err => Promise.all([
          dispatch(showErrorAlerts(err.messages)),
          dispatch(updateLoginForm({saving: false}))
        ]));
      
  }
}
export function logoutAccount(){
  return function (dispatch) {
    return dispatch(logoutUser());
  }
}
export function setLoginValue({name, value = ''}) {
  return function (dispatch) {
    return dispatch(updateLoginValue({[name]: value}));
  }
}

export function setLoginForm(form) {
  return function (dispatch) {
    dispatch(updateLoginForm(form));
  }
}
