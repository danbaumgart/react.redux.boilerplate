import TrinitaWellness from './trinitaWellness';
import {CONTACTS} from './constants/apiResources';
import {PHONES, EMAILS} from './constants/endpoints/contactsApi';
import {toQueryParameters} from '../http/utils/httpUtils';
import {FORWARD_SLASH} from '../utils/constants/characters';
class Contacts extends TrinitaWellness {
    constructor() {
        super(CONTACTS);
    }
    static ToDomainModel(contact) {
        return {
            phone: contact.phoneNumber,
            email: contact.emailAddress,
            extension: contact.extension,
            firstName: contact.firstName,
            lastName: contact.lastName
        };
    }
    Post(contact){
        const domainModel = Contacts.ToDomainModel(contact);
        console.log("DOMAIN", domainModel);
        return super.Post(domainModel);
    }
    GetPhoneNumbers(contactId){
        return super.Get(null, Contacts.Phones(contactId));
    }
    InsertPhoneNumber(contactId, phone, extension = null){
        return super.Post(extension ? {id: contactId, phone, extension} : {id: contactId, phone}, Contacts.Phones(contactId));
    }
    UpdatePhoneNumber(contactId, phone, extension){
        return super.Put({id: contactId, phone, extension}, Contacts.Phones(contactId, phone));
    }
    DeletePhoneNumber(contactId, phone){
        return super.Delete(Contacts.Phones(contactId, phone));
    }
    GetEmailAddresses(contactId){
        return super.Get(null, Contacts.Emails(contactId));
    }
    InsertEmailAddress(contactId, emailAddress, authenticationStatus, password){
        return super.Post({contactId, emailAddress, authenticationStatus, password}, Contacts.Emails(contactId))
    }
    UpdateEmailAddress(contactId, emailAddress, authenticationStatus, password){
        return super.Put({contactId, emailAddress, authenticationStatus, password}, Contacts.Emails(contactId, emailAddress))
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
        if(emailAddress) endpoint += toQueryParameters({emailAddress});
        return endpoint;
    }
}
export default new Contacts();
