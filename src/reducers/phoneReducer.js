import ACTIONS from '../actions/types/phoneActions';
import initialState from './initialState';

export default function phone(state = initialState.phone, action) {
    switch(action.type) {
        case ACTIONS.UPDATE_PHONE_NUMBER:
            return Object.assign({}, state, {phoneNumber: action.payload});
        case ACTIONS.UPDATE_EXTENSION:
            return Object.assign({}, state, {extension: action.payload});
        case ACTIONS.SAVE_CONTACT:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}
