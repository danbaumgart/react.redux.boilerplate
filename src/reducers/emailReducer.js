import ACTIONS from '../actions/types/emailActions'
import initialState from './initialState';

export default function email(state = initialState.email, action) {
    switch(action.type){
        case ACTIONS.UPDATE_EMAIL_ADDRESS:
            return Object.assign({}, state, {emailAddress: action.payload});
        case ACTIONS.UPDATE_EMAIL_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case ACTIONS.UPDATE_EMAIL_STATUS:
            return Object.assign({}, state, {status: action.payload});
        default: return state;
    }
}
