import * as types from './actionTypes';

export function toggleNavbar(){
  return {type:types.TOGGLE_NAVBAR};
}
export function closeNavbar(){
  return {type: types.CLOSE_NAVBAR};
}
