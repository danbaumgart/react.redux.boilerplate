import ACTIONS from './types/universitiesActions';
import Universities from '../services/universities';
function _loadUniversities(universities){
    return {type: ACTIONS.LOAD_UNIVERSITIES, payload: universities};
}
export function searchUniversities(name) {
    return function(dispatch) {
        return Universities.GetDetailsByName(name)
            .then(result => dispatch(_loadUniversities(result)));
    }
}
export function loadUniversities(universities){
    return function(dispatch){
        dispatch(_loadUniversities(universities));
    }
}
