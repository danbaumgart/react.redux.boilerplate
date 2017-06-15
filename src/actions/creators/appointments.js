import ACTIONS from '../types/universities';
function _loadUniversities(universities){
    return {type: ACTIONS.LOAD_UNIVERSITIES, payload: universities};
}
export function loadUniversities(universities){
    return function(dispatch){
        dispatch(_loadUniversities(universities));
    }
}
