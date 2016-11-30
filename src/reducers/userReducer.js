import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, {payload, type}) {
  switch(type){
    case types.EXPIRE_LOGIN:
      return {};
    case types.LOGIN_SUCCESS:
      return Object.assign({}, payload.user);
    case types.LOGOUT_SUCCESS:
      return Object.assign({});
    default:
      return state;
  }
}
