import * as types from './actionTypes';
import accountApi from '../api/mockAccountApi';
import {ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';

export function loadAccountSchema(schema) {
  return {type: types.LOAD_ACCOUNT_SCHEMA, payload: schema};
}
export function loadAccountSuccess(account) {
  return {type: types.LOAD_ACCOUNT_SUCCESS, payload: account, timestamp:Timestamp()};
}
export function createAccountSuccess(account) {
  return {type: types.CREATE_ACCOUNT_SUCCESS, payload: account, timestamp:Timestamp()};
}
export function loadAccountError(account) {
  return {type: types.LOAD_ACCOUNT_ERROR, payload: account, timestamp:Timestamp()};
}
export function createAccountError(account) {
  return {type: types.CREATE_ACCOUNT_ERROR, payload: account, timestamp:Timestamp()};
}
export function updateAccount(accountField) {
  return {type: types.UPDATE_ACCOUNT, payload: accountField};
}

export function loadAccount(user, pass) {
  return function (dispatch) {
    return accountApi.loadAccount(user, pass)
      .then((res)=>dispatch(loadAccountSuccess(res)))
      .catch((err)=>dispatch(loadAccountError(user)));
  };
}
export function getAccountSchema() {
  return function (dispatch) {
    return accountApi.loadSchema()
      .then(res => dispatch(loadAccountSchema(res)))
      .catch(err => dispatch(ajaxCallError(err)));
  };
}
export function createAccount(account) {
  return function (dispatch) {
    return accountApi.createAccount(account)
      .then((res)=>{
        console.log("RES", res);
        dispatch(createAccountSuccess(account));
      })
      .catch((err)=>{
        console.log("ERR", err);
        dispatch(ajaxCallError(err));
        dispatch(createAccountError(account));
        throw(err);
        
      });
  };
}
export function updateAccountForm(field) {
  return function (dispatch) {
    dispatch(updateAccount(field));
  };
}

