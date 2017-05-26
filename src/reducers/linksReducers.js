import ACTIONS from '../actions/types/linksActions';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.links, action) {
    switch (action.type) {
        case ACTIONS.LOAD_USER_LINKS:
            return Object.assign({}, state, {userLinks: action.payload});
        case ACTIONS.LOAD_HOME_LINKS:
            return Object.assign({}, state, {homeLinks: action.payload});
        default: return state;
    }
}
