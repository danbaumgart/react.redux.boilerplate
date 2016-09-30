import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function schemaReducer(state = initialState.schema, action) {
  switch (action.type) {
    case types.LOAD_ACCOUNT_SCHEMA:
      return Object.assign({},
        state,
        {account: action.payload});
    default:
      return state;
  }
}
