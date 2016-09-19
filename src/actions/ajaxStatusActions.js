import * as types from './actionTypes';
import Timestamp from '../api/timestampApi';

export function beginAjaxCall(endpoint){
  return {type: types.BEGIN_AJAX_CALL,endpoint,timestamp:Timestamp()};
}
export function ajaxCallError(endpoint){
  return {type: types.AJAX_CALL_ERROR,endpoint,timestamp:Timestamp()};
}
