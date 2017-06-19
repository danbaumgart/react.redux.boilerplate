import ACTIONS from '../actions/types/contacts';
import initialState from './initialState';

export default function contact(state = initialState.contact, action) {
	switch(action.type) {
        case ACTIONS.UPDATE_CONTACT_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload});
        case ACTIONS.UPDATE_CONTACT_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload});
        case ACTIONS.UPDATE_CONTACT_EMAIL_ADDRESS:
            return Object.assign({}, state, {emailAddress: action.payload});
        case ACTIONS.UPDATE_CONTACT_PHONE_NUMBER:
            return Object.assign({}, state, {phoneNumber: action.payload});
        case ACTIONS.UPDATE_CONTACT_EXTENSION:
            return Object.assign({}, state, {extension: action.payload});
        case ACTIONS.UPDATE_CONTACT_ERROR_INFO:
            return Object.assign({}, state, {errorInfo: Object.assign({}, state.errorInfo, action.payload)})
        case ACTIONS.SAVE_CONTACT:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}
