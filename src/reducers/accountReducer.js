import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case types.UPDATE_ACCOUNT:
      return Object.assign({}, action.payload);
    default:
      return Object.assign({},state);
  }
}
