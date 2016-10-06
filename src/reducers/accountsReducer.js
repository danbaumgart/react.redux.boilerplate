import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.accounts, action) {
  switch(action.type){
    case types.CREATE_ACCOUNT_SUCCESS:
      return [
        ...state,
        Object.assign({}, {account:action.payload})
      ];
    default:
      return state;
  }
}
