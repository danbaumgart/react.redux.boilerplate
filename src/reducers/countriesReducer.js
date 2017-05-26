import ACTIONS from '../actions/types/countriesActions';
import initialState from './initialState';

export default function countries(state = initialState.countries, action) {
    return action.type === ACTIONS.LOAD_COUNTRIES ? [...action.payload] : [...state];
}
