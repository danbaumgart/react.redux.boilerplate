import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registrationReducer(state = initialState.registration, {type, payload}) {
  switch (type) {
    case types.INITIALIZE_REGISTRATION:
      return Object.assign({}, state, payload);
    case types.UPDATE_REGISTRATION:
      return Object.assign({}, state,
        {errors: payload.errors},
        {form: Object.assign({}, state.form, payload.form)},
        {values: payload.values ? Object.assign({}, state.values, payload.values) : state.values});
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({}, state,
        {form: Object.assign({}, state.form, payload)});
    case types.UPDATE_REGISTRATION_VALUE:
      return Object.assign({}, state,
        {values: Object.assign({}, state.values, payload)});
    case types.UPDATE_REGISTRATION_ERRORS:
      return Object.assign({}, state,
        {errors: payload});
    case types.REGISTRATION_SUCCESS:
      return Object.assign({}, {schema: state.schema}, payload);
    default:
      return state;
  }
}
