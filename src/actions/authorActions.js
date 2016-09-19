import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';

export function loadAuthorsSuccess(authors){
  return {type:types.LOAD_AUTHORS_SUCCESS,authors,timestamp:Timestamp()};
}
export function loadAuthorsError(error){
  return {type:types.LOAD_AUTHORS_ERROR,error,timestamp:Timestamp()};
}

export function loadAuthors(){
  return function(dispatch){
    let endpoint = 'getAllAuthors';
    dispatch(beginAjaxCall(endpoint));
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error=>{
        dispatch(ajaxCallError(endpoint));
        dispatch(loadAuthorsError(error));
        throw(error);
      });
  };
}
