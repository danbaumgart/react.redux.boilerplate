import * as types from '../actions/actionTypes';
import initialState from './initialState';

const formMapping = (schema) => {
  let keys = Object.keys(schema)
}

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    // case types.LOAD_ACCOUNT_SCHEMA:
    //   return Object.assign({}, state, {schema: action.payload});
    case types.UPDATE_ACCOUNT:
      return Object.assign({},state,action.payload);
    default:
      return state;
  }
}
