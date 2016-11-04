import * as types from '../actions/actionTypes';
import initialState from './initialState';
import vtypes from '../utils/enums/validation';

export default function registrationReducer(state = initialState.registration, action) {
  switch (action.type) {
    
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({}, state, {form: action.payload});
    case types.UPDATE_REGISTRATION_FIELD:
      return Object.assign({}, state, {form: Object.assign({}, state.form, action.payload)});
    
    case types.UPDATE_REGISTRATION_ERRORS:
      return Object.assign({}, state, {errors: Object.assign({}, state.errors, action.payload)});
    
    case types.INITIALIZE_REGISTRATION:
      return action.payload;
    
    default:
      return state;
  }
}
