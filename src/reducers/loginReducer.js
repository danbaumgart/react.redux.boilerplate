import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, {payload, type}) {
  switch(type){
    case types.INITIALIZE_LOGIN:
      return Object.assign({}, state, payload);
    case types.UPDATE_LOGIN_FORM:
      return Object.assign({}, state,
        {form: Object.assign({}, state.form, payload)});
    case types.UPDATE_LOGIN_VALUE:
      return Object.assign({}, state,
        {values: Object.assign({}, state.values, payload)});
    case types.UPDATE_LOGIN_ERRORS:
      return Object.assign({}, state,
        {errors: payload});
    case types.LOGIN_SUCCESS:
      return Object.assign({}, payload.login, {schema: state.schema});
    default:
      return state;
  }
}
