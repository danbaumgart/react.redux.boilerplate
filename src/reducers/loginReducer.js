import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  switch(action.type){
    case types.UPDATE_LOGIN_FORM:
      return Object.assign({}, state, action.payload);
    case types.LOGIN_SUCCESS:
      let {username, first, last} = action.payload;
      return Object.assign({}, username, first, last);
    default:
      return state;
  }
}
