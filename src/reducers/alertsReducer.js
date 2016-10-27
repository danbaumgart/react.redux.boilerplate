import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function alertsReducer(state = initialState.alerts, action) {
  switch(action.type){
    case types.LAUNCH_TOAST_MESSAGE:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}
