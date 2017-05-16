import TrinitaWellness from './trinitaWellness';
import {CONTACTS} from './constants/apiResources';
import {PHONES, EMAILS} from './constants/endpoints/contactsApi';
import {toEncodedParameters} from '../http/utils/httpUtils';
import {FORWARD_SLASH, QUESTION_MARK} from '../utils/constants/characters';
class Contacts extends TrinitaWellness {
    constructor() {
        super(CONTACTS);
    }
    GetPhoneNumbers(contactId){
        return super.Get(Contacts.Phones(contactId))
    }
    InsertPhoneNumber(contactId, phone, extension){
        return super.Post(Contacts.Phones(contactId), {id: contactId, phone, extension})
    }
    UpdatePhoneNumber(contactId, phone, extension){
        return super.Put(Contacts.Phones(contactId, phone), {id: contactId, phone, extension})
    }
    DeletePhoneNumber(contactId, phone){
        return super.Delete(Contacts.Phones(contactId, phone));
    }
    GetEmailAddresses(contactId){
        return super.Get(Contacts.Emails(contactId));
    }
    InsertEmailAddress(contactId, emailAddress, authenticationStatus, password){
        return super.Post(Contacts.Emails(contactId), {contactId, emailAddress, authenticationStatus, password})
    }
    UpdateEmailAddress(contactId, emailAddress, authenticationStatus, password){
        return super.Put(Contacts.Emails(contactId, emailAddress), {contactId, emailAddress, authenticationStatus, password})
    }
    DeleteEmailAddress(contactId, emailAddress){
        return super.Delete(Contacts.Emails(contactId, emailAddress));
    }
    static Phones(contactId, phone){
        let endpoint = FORWARD_SLASH + contactId + PHONES;
        if(phone) endpoint += FORWARD_SLASH + phone;
        return endpoint;
    }
    static Emails(contactId, emailAddress) {
        let endpoint = FORWARD_SLASH + contactId + EMAILS;
        if(emailAddress) endpoint += QUESTION_MARK + toEncodedParameters({emailAddress});
        return endpoint;
    }
}
export default new Contacts();
