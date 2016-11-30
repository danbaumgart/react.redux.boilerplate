import * as types from '../actions/actionTypes';
import initialState from './initialState';
import alertType from '../enums/alerts';

export default function alertsReducer(state = initialState.alerts, action) {
  switch(action.type){
    case types.SHOW_DEFAULT_MESSAGES:
      return [
        ...state,
        ...action.payload.map(message => Object.assign({message}, {style: alertType.styles[alertType.DEFAULT]}))
      ];
    case types.SHOW_SUCCESS_MESSAGES:
      return [
        ...state,
        ...action.payload.map(message => Object.assign({message}, {style: alertType.styles[alertType.SUCCESS]}))
      ];
    case types.SHOW_ERROR_MESSAGES:
      console.log("ACTION PAYLOAD ALERTS REDUCER", action.payload);
      return [
        ...state,
        ...action.payload.map(message => Object.assign({message}, {style: alertType.styles[alertType.ERROR]}))
      ];
    default:
      return state;
  }
}
