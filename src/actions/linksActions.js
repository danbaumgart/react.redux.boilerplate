import * as types from './actionTypes';
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
      {path: '/registration', name: 'Register'},
      {path: '/login', name: 'Sign in'},
      {path: '/logoff', name: 'Sign out'}];
    dispatch(loadUserLinks(userLinks));
  };
}
export function getHomeLinks() {
  return function (dispatch) {
    let homeLinks = [
      {path: '/', name: 'Home'},
      {path: '/volunteer', name: 'Volunteer'},
      {path: '/services', name: 'Seeking Help'}];
    dispatch(loadHomeLinks(homeLinks));
  }
}
