import ACTIONS from './types/contactActions';
import PatternHandler from '../utils/regex/patterns';
import {TELEPHONE_MASK} from '../utils/constants/regexPatterns';
import Contacts from '../services/contacts';
function _updateContactFirstName(firstName){
    return {type: ACTIONS.UPDATE_CONTACT_FIRST_NAME, payload: firstName};
}
function _updateContactLastName(lastName){
    return {type: ACTIONS.UPDATE_CONTACT_LAST_NAME, payload: lastName};
}
function _updateContactEmailAddress(emailAddress){
    return {type: ACTIONS.UPDATE_CONTACT_EMAIL_ADDRESS, payload: emailAddress};
}
function _updateContactPhoneNumber(phoneNumber){
    return {type: ACTIONS.UPDATE_CONTACT_PHONE_NUMBER, payload: phoneNumber};
}
function _updateContactExtension(extension){
    return {type: ACTIONS.UPDATE_CONTACT_EXTENSION, payload: extension};
}
function _saveContact(contact){
    return {type: ACTIONS.SAVE_CONTACT, payload: contact};
}
export const updateContactFirstName = firstName => function(dispatch){
    dispatch(_updateContactFirstName(firstName));
};
export const updateContactLastName = lastName => function(dispatch){
    dispatch(_updateContactLastName(lastName));
};
export const updateContactEmailAddress = emailAddress => function(dispatch){
    dispatch(_updateContactEmailAddress(emailAddress));
};
export const updateContactPhoneNumber = phoneNumber => function(dispatch){
    const unmaskedPhoneInput = phoneNumber.replace(PatternHandler[TELEPHONE_MASK], '');
    dispatch(_updateContactPhoneNumber(unmaskedPhoneInput));
};
export const updateContactExtension = extension => function(dispatch){
    //const unmaskedExtension = extension.slice(5);

    console.log("EXTENSION", extension);
    dispatch(_updateContactExtension(extension));
};
export const saveContact = contact => function(dispatch){
    return Contacts.Post(contact)
        .then(result => dispatch(_saveContact(contact)));
};
