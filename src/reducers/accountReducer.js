import * as types from '../actions/actionTypes';
import initialState from './initialState';

const formMapping = (schema) => {
  let keys = Object.keys(schema)
}

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case types.LOAD_ACCOUNT_SUCCESS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
