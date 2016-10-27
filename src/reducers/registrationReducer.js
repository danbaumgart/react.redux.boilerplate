import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function registrationReducer(state = initialState.registration, action) {
  switch (action.type) {
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({}, state, {form: action.payload});
    case types.UPDATE_REGISTRATION_ERRORS:
      console.log("REDUCER ERRORS", action);
      return Object.assign({}, state, {errors: action.payload});
    case types.REGISTRATION_SUCCESS:
      return Object.assign({}, state, {form: {}}, {errors:{}});
    case types.LOAD_REGISTRATION_SCHEMA:
      return Object.assign({}, state, {schema: action.payload});
    default:
      return state;
  }
}
