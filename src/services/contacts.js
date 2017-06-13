import TrinitaWellness from './trinitaWellness';
import HttpMapper from '../http/models/httpMapper';
import {CONTACTS} from './constants/apiResources';
import {PHONES, EMAILS} from './constants/endpoints/contactsApi';
import {toQueryParameters} from '../http/utils/httpUtils';
import CHARACTERS from '../utils/constants/characters';
class ContactPhones extends TrinitaWellness{
    constructor(resource) {
        super(resource, new HttpMapper(ContactPhones.ToDomainModel));
    }
    static ToDomainModel(model) {
        return {
            id: model.contactId,
            phone: model.phone,
            extension: model.extension
        }
    }
}
class ContactEmails extends TrinitaWellness{
    constructor(resource) {
        super(resource);
    }
    Get(emailAddress) {
        return emailAddress ? super.Get(toQueryParameters({emailAddress})) : super.Get();
    }
    Put(contactEmail, emailAddress) {
        return super.Put(contactEmail, toQueryParameters({emailAddress}));
    }
    Delete(emailAddress) {
        return super.Delete(toQueryParameters({emailAddress}));
    }
}
class Contacts extends TrinitaWellness {
    constructor() {
        super(CONTACTS, new HttpMapper(Contacts.ToDomainModel));
        this.endpoints = {PHONES, EMAILS}
    }
    static ToDomainModel(contact) {
        return {
            Id: contact.id || null,
            LastName: contact.lastName,
            FirstName: contact.firstName,
            Email: contact.emailAddress,
            Phone: contact.phoneNumber || null,
            Extension: contact.extension || null,
        };
    }
    Phones(contactId){
        const resource = CONTACTS + CHARACTERS.FORWARD_SLASH + contactId + this.endpoints.PHONES;
        return new ContactPhones(resource);
    }
    Emails(contactId){
        const resource = CONTACTS + CHARACTERS.FORWARD_SLASH + contactId + this.endpoints.EMAILS;
        return new ContactEmails(resource);
    }
}
export default new Contacts();
