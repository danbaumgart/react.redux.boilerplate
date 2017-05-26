import ACTIONS from '../actions/types/universitiesActions';
import initialState from './initialState';
export default function universities(state = initialState.universities, action) {
	return action.type === ACTIONS.LOAD_UNIVERSITIES ?
        [...action.payload] :
        [...state];
}
