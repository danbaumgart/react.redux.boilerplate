import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function accountReducer(state = initialState.registration, action) {
  switch (action.type) {
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({}, action.payload);
    default:
      return Object.assign({},state);
  }
}
