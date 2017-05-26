import ACTIONS from './types/linksActions';
import Timestamp from '../api/timestampApi';

export function loadUserLinks(links){
  return {type: ACTIONS.LOAD_USER_LINKS, payload: links, timestamp:Timestamp()};
}
export function loadHomeLinks(links){
  return {type: ACTIONS.LOAD_HOME_LINKS, payload: links, timestamp:Timestamp()};
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
        {path: '/about', name: 'About'},
        {path: '/contactme', name: 'Contact Me'},
        {path: '/testimonials', name: 'Testimonials'},
        {path: '/appointment', name: 'Appointment'},
        {path: '/events', name: 'Events'}
      ];
    dispatch(loadHomeLinks(homeLinks));
  }
}
