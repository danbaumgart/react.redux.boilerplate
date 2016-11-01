import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function registrationReducer(state = initialState.registration, action) {
  switch (action.type) {
    case types.UPDATE_REGISTRATION_FORM:
      return Object.assign({},
        state, {
        form: action.payload
      });
    case types.UPDATE_REGISTRATION_ERRORS:
      return Object.assign({},
        state, {
        errors: action.payload
      });
    case types.REGISTRATION_SUCCESS:
      return Object.assign({},
        action.payload,
        state.schema
      );
    case types.UPDATE_REGISTRATION_SCHEMA:
      return Object.assign({},
        state, {
        schema: action.payload
      });
    default:
      return state;
  }
}
