import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
