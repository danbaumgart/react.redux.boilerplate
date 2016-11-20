import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registrationReducer(state = initialState.registration, action) {
  switch (action.type) {
    case types.UPDATE_REGISTRATION:
      return Object.assign({}, state,
        {errors: action.payload.errors},
        {form: Object.assign({}, state.form, action.payload.form)},
        {values: action.payload.values ? Object.assign({}, state.values, action.payload.values) : state.values});
    
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({}, state,
        {form: Object.assign({}, state.form, action.payload)});
    
    case types.UPDATE_REGISTRATION_VALUE:
      return Object.assign({}, state,
        {values: Object.assign({}, state.values, action.payload)});
  
    case types.UPDATE_REGISTRATION_ERRORS:
      return Object.assign({}, state,
        {errors: action.payload});
    
    case types.REGISTRATION_SUCCESS:
      return Object.assign({}, {schema: state.schema}, action.payload);
    
    case types.INITIALIZE_REGISTRATION:
      return Object.assign({}, state, action.payload);
    
    default:
      return state;
  }
}
