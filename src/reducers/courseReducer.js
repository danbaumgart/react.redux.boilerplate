import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({},action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      let targetIndex = state.findIndex(c => c.id == action.course.id);
      return [
        ...state.slice(0,targetIndex),
        Object.assign({},action.course),
        ...state.slice(targetIndex+1)
      ];
    case types.DELETE_COURSE_SUCCESS:
      return [
        ...state.filter(c=>c.id !== action.course.id)
      ];
    default:
      return state;
  }
}
