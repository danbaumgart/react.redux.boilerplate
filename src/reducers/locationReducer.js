import ACTIONS from '../actions/types/locationActions';
import initialState from './initialState';

export default function location(state = initialState.location, action) {
    switch(action.type) {
        case ACTIONS.UPDATE_LOCATION_NAME:
            return Object.assign({}, state, {name: action.payload});
        case ACTIONS.UPDATE_LOCATION_CITY:
            return Object.assign({}, state, {city: action.payload});
        case ACTIONS.UPDATE_LOCATION_STATE:
            return Object.assign({}, state, {state: action.payload});
        case ACTIONS.UPDATE_LOCATION_STREET:
            return Object.assign({}, state, {street: action.payload});
        case ACTIONS.UPDATE_LOCATION_ZIP:
            return Object.assign({}, state, {zip: action.payload});
        case ACTIONS.UPDATE_LOCATION_INSTITUTION:
            return Object.assign({}, state, {institution: action.payload});
        case ACTIONS.SAVE_CONTACT:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}
