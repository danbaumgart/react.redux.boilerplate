import * as types from '../actions/actionTypes';
import initialState from './initialState';
import vtypes from '../utils/enums/validation';

const addRegistrationError = (state, errors) =>{
  return [
    ...state,
    ...errors.filter(e => !state.includes(e))
  ]
};

export default function registrationReducer(state = initialState.registration, action) {
  switch (action.type) {
    case types.UPDATE_REGISTRATION_FIELD:
      return Object.assign({}, state, {form: Object.assign({}, state.form, action.payload)});
    
    case types.UPDATE_REGISTRATION_ERRORS:
      return Object.assign({}, state, {errors: Object.assign({}, state.errors, action.payload)});
    
    case types.REMOVE_REGISTRATION_ERRORS:
      let obj = Array.isArray(state.errors[action.field]) ? state.errors[action.field].filter(e=>!action.errors.includes(e)) : [];
      return Object.assign({}, state, {errors: Object.assign({}, state.errors, {[action.field]: obj})});
    
    case types.ADD_REGISTRATION_ERRORS:
      return Object.assign({}, state, {errors: Object.assign({}, state.errors, {
        [action.field]: addRegistrationError(state.errors[action.field], action.errors)
      })});
    case types.INITIALIZE_REGISTRATION:
      return action.payload;
    default:
      return state;
  }
}
