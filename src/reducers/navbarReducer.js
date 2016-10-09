import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navbarReducer(state = initialState.navbarCollapsed, action) {
  switch(action.type){
    case types.TOGGLE_NAVBAR:
      return !state;
    case types.CLOSE_NAVBAR:
      return true;
    default:
      return state;
  }
}
