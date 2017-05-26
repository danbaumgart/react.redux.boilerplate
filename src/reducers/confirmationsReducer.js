import ACTIONS from '../actions/types/confirmationsActions';
import initialState from './initialState';
export default function confirmations(state = initialState.confirmations, action) {
	return action.type === ACTIONS.LOAD_CONFIRMATIONS ? [...action.payload] : [...state];
};
