import ACTIONS from '../actions/types/states';
import initialState from './initialState';

export default function states(state = initialState.states, action) {
    return action.type === ACTIONS.LOAD_STATES ?
        [...action.payload] :
        [...state];
}
