class Contact {
  constructor(contact) {
    this.id = contact.id;
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.email = contact.emailAddress;
    this.phone = contact.phoneNumber;
    this.extension = contact.extension;
  }
}
const createContact = (id, firstName, lastName, email, phoneNumber, extension) => new Contact({id, firstName, lastName, emailAddress, phoneNumber, extension});
export default [
  createContact(1, "Jennifer", "Ippolito", "jippolito@gmail.com", "3147172238", null),
  createContact(2, "Daniel", "Baumgart", "dpbgdd@mail.umsl.edu", "3147181815", null),
  createContact(3, "Stephen", "Baumgart", "stephen.baumgart@csi-leasing.com", "3149977010", "527")
];
