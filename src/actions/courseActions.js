import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
import Timestamp from '../api/timestampApi';


export function loadCoursesSuccess(courses){
  return {type:types.LOAD_COURSES_SUCCESS,courses,timestamp:Timestamp()};
}
export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS,course,timestamp:Timestamp()};
}
export function updateCourseSuccess(course){
  return {type:types.UPDATE_COURSE_SUCCESS,course,timestamp:Timestamp()};
}
export function deleteCourseSuccess(course){
  return {type:types.DELETE_COURSE_SUCCESS,course,timestamp:Timestamp()};
}
export function loadCoursesError(error){
  return {type:types.LOAD_COURSES_ERROR,error,timestamp:Timestamp()};
}
export function createCourseError(error){
  return {type: types.CREATE_COURSE_ERROR,error,timestamp:Timestamp()};
}
export function updateCourseError(error){
  return {type:types.UPDATE_COURSE_ERROR,error,timestamp:Timestamp()};
}
export function deleteCourseError(error){
  return {type:types.DELETE_COURSE_ERROR,error,timestamp:Timestamp()};
}

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall('getAllCourses'));
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      dispatch(loadCoursesError(error));
      throw(error);
    });
  };
}
export function saveCourse(course){
  const c = Object.assign({},course);
  return function(dispatch, getState){
    
    if(c.id){
      dispatch(beginAjaxCall('updateCourse'));
      return courseApi.updateCourse(c)
        .then(updatedCourse =>{
          dispatch(updateCourseSuccess(updatedCourse));
        }).catch(error => {
          dispatch(ajaxCallError(error));
          dispatch(updateCourseError(error));
          throw(error);
        });
    }else{
      dispatch(beginAjaxCall('createCourse'));
      return courseApi.createCourse(c)
        .then(createdCourse =>{
          dispatch(createCourseSuccess(createdCourse));
        }).catch(error => {
          dispatch(ajaxCallError(error));
          dispatch(createCourseError(error));
          throw(error);
        });
    }
  };
}
export function deleteCourse(course){
  const c = Object.assign({},course);
  return function(dispatch, getState) {
    dispatch(beginAjaxCall('deleteCourse'));
    return courseApi.deleteCourse(c)
      .then(deleted => {
        dispatch(deleteCourseSuccess(deleted));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        dispatch(deleteCourseError(error));
        throw(error);
      });
  }
}
