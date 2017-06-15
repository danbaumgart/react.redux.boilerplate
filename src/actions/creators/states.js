import ACTIONS from '../types/states';
import States from '../../services/states';
function _loadStates(states){
    return {type: ACTIONS.LOAD_STATES, payload: states};
}
export function loadStates(){
    return function(dispatch){
        return States.Get().then(states => dispatch(_loadStates(states.content)));
    }
}
