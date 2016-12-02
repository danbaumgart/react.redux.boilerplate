import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navbarReducer(state = initialState.navbarOpen, action) {
  switch(action.type){
    case types.OPEN_NAVBAR:
      return true;
    case types.TOGGLE_NAVBAR:
      return !(!!state);
    case types.CLOSE_NAVBAR:
      return false;
    default:
      return state;
  }
}
