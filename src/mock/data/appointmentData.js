class Appointment {
    constructor(contact) {
        this.id = contact.id;
        this.date = contact.date;
        this.time = contact.time;
        this.flexible = contact.flexible;
        this.cancelled = contact.cancelled;
        this.contactId = contact.contactId;
        this.institutionId = contact.institutionId;
        this.location = contact.location;
        this.details = contact.details;
    }
}
const createAppointment = (id, date, time, flexible, cancelled, contactId, institutionId, location, details) => new Appointment({id, date, time, flexible, cancelled, contactId, institutionId, location, details});
export default [
    createAppointment(1, "05/10/2018", "5:00 PM", false, false, 1, null, null, null),
    createAppointment(2, "05/20/2017", "6:00 PM", false, false, 2, null, null, null),
    createAppointment(3,  "05/10/2018", "8:00 PM", false, false, 2, null, null, null),
];
