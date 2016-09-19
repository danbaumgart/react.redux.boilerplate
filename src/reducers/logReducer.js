import * as types from '../actions/actionTypes';
import initialState from './initialState';

const log = {
  type:'',
  id:0
};

const getLogType = (type) => {
  let suffix = type.lastIndexOf('_');
  if(type == types.AJAX_CALL_ERROR) return 'CALL';
  return type.slice(suffix+1);
};


export default function logReducer(state = initialState.log, action) {
  switch(getLogType(action.type).toLowerCase()){
    case 'success':
      log.id++;
      return [
        ...state,
        Object.assign({},{id:'S'+log.id},action)
      ];
    case 'error':
      log.id++;
      return [
        ...state,
        Object.assign({},{id:'E'+log.id},action)
      ];
    default:
      return state;
  }
}
