import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';

export function loginSuccess(account){
  return {type:types.LOGIN_SUCCESS,payload:account};
}
export function registrationSuccess(account){
  return {type:types.REGISTRATION_SUCCESS,payload:account};
}
export function loginError(account){
  return {type:types.LOGIN_ERROR,payload:account};
}
export function registrationError(account){
  return {type:types.REGISTRATION_ERROR,payload:account};
}
export function login(user,pass) {
  return accountApi.login(user,pass)
    .then((res)=>dispatch(loginSuccess(res)))
    .catch((err)=>dispatch(loginError(user)));
}
export function register(user,pass) {
  return accountApi.registerAccount(user,pass)
    .then((res)=>dispatch(registrationSuccess(res)))
    .catch((err)=>dispatch(registrationError(user)));
}
