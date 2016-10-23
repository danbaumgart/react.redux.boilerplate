import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.links, action) {
  switch (action.type) {
    case types.LOAD_USER_LINKS:
      return Object.assign({}, state, {userLinks: action.payload});
      break;
    case types.LOAD_HOME_LINKS:
      return Object.assign({}, state, {homeLinks: action.payload});
    default:
      return state;

  }
}
