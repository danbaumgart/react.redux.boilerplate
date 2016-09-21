import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navbarReducer(state = initialState.navbarCollapsed, action) {
  if(action.type == types.TOGGLE_NAVBAR)
    return !state;
  return state;
}
