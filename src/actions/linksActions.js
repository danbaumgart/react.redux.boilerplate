import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';

export function loadUserLinks(links){
  return {type:types.LOAD_USER_LINKS, payload: links, timestamp:Timestamp()};
}
export function loadHomeLinks(links){
  return {type:types.LOAD_HOME_LINKS, payload: links, timestamp:Timestamp()};
}

export function getUserLinks(){
  return function(dispatch){
    let userLinks = [
      {path: '/account', name: 'Register'},
      {path: '/account/login', name: 'Sign in'},
      {path: '/account/logoff', name: 'Sign out'}];
    dispatch(loadUserLinks(userLinks));
  };
}
export function getHomeLinks() {
  return function (dispatch) {
    let homeLinks = [
      {path: '/', name: 'Home'},
      {path: '/volunteer', name: 'Volunteer'},
      {path: '/training', name: 'Training'}];
    dispatch(loadHomeLinks(homeLinks));
  }
}
