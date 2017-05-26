import ACTIONS from '../actions/types/statesActions';
import initialState from './initialState';

export default function states(state = initialState.states, action) {
    return action.type === ACTIONS.LOAD_STATES ?
        [...action.payload] :
        [...state];
}
