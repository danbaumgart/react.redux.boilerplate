import ACTIONS from '../actions/types/universitiesActions';
import initialState from './initialState';
export default function universities(state = initialState.universities, action) {
    console.log("ACTION", action);
	return action.type === ACTIONS.LOAD_UNIVERSITIES ?
        [...action.payload] :
        [...state];
}
