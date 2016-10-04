import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.errors, action) {
  const errors = Object.assign({},state);
  switch(action.type){
    case types.ACCOUNT_VALIDATION_ERROR:
      if(errors.account)
        Object.assign({},errors.account,action.payload)
  }
  return state;
}
