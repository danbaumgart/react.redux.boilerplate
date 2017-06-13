import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SwipeableTabs from '../../ui/SwipeableTabs';
import ContactForm from '../contact/contactForm';
import APPOINTMENT from './constants/appointmentProperties';
import LOCATION from './constants/locationProperties';
import CONTACT from '../contact/constants/contactProperties';
import INSTITUTION from './constants/institution';
import AppointmentForm from './appointmentForm';
import LocationForm from './locationForm';
import ContactSchema from '../../config/schema/contactSchema';
import SchemaMapper from '../../config/schema/utils/schemaMappers';
import * as locationActions from '../../actions/locationActionCreators';
import * as contactActions from '../../actions/contactActionCreators';
import * as appointmentActions from '../../actions/appointmentActionCreators';
import * as universitiesActions from '../../actions/universitiesActionCreators';
class AppointmentTabPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.getContactProps = this.getContactProps.bind(this);
        this.getAppointmentProps = this.getAppointmentProps.bind(this);
        this.getLocationProps = this.getLocationProps.bind(this);
	}
    getAppointmentProps() {
        const {
            appointment: {date, time, flexible, details},
            actions: {appointment: actions}
        } = this.props;
        return {date, time, flexible, details, actions};
    }
	getContactProps() {
        const errorInfo = SchemaMapper.toErrorInfoModel(ContactSchema, this.props.contact);
        const {
            contact: {firstName, lastName, emailAddress, phoneNumber, extension},
            actions: {contact: actions}
        } = this.props;
        return {firstName, lastName, emailAddress, phoneNumber, extension, actions, errorInfo};
    }
    getLocationProps() {
        const {institution = INSTITUTION.UNIVERSITY, name, street, city, state, zip, details} = this.props.location;
        return {
            name, street, city, state, zip, details,
            institution: INSTITUTION[institution] || INSTITUTION.OTHER,
            actions: this.props.actions.location,
            universities: this.props.universities,
        };
    }
	render() {
        const tabs = ['Contact Info', 'Schedule', 'Location'];
        const appointmentProps = this.getAppointmentProps();
        const contactProps = this.getContactProps();
        const locationProps = this.getLocationProps();
        const views = [
            <ContactForm {...contactProps} />,
            <AppointmentForm {...appointmentProps} />,
            <LocationForm {...locationProps} />
        ];
	    return <SwipeableTabs views={views} tabs={tabs} />;
	}
}
AppointmentTabPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
	appointment: React.PropTypes.object,
    contact: React.PropTypes.object,
    location: React.PropTypes.object,
    universities: React.PropTypes.arrayOf(React.PropTypes.object)
};
AppointmentTabPage.defaultProps = {
    appointment: null,
    contact: null,
    location: null,
    universities: []
};

function mapStateToProps(state, ownProps) {
    const {appointment, contact, location, universities} = state;
    return {appointment, contact, location, universities};
}

function mapDispatchToProps(dispatch) {
    const appointment = {
        [APPOINTMENT.DATE]: appointmentActions.updateAppointmentDate,
        [APPOINTMENT.TIME]: appointmentActions.updateAppointmentTime,
        [APPOINTMENT.DETAILS]: appointmentActions.updateAppointmentDetails,
        [APPOINTMENT.FLEXIBLE]: appointmentActions.updateAppointmentFlexible
    };
    const contact = {
        [CONTACT.FIRST_NAME]: contactActions.updateContactFirstName,
        [CONTACT.LAST_NAME]: contactActions.updateContactLastName,
        [CONTACT.EMAIL_ADDRESS]: contactActions.updateContactEmailAddress,
        [CONTACT.PHONE_NUMBER]: contactActions.updateContactPhoneNumber,
        [CONTACT.EXTENSION]: contactActions.updateContactExtension,
        saveContact: contactActions.saveContact,
    };
    const location = {
        [LOCATION.INSTITUTION]: locationActions.updateLocationInstitution,
        [LOCATION.NAME]: locationActions.updateLocationName,
        [LOCATION.STATE]: locationActions.updateLocationState,
        [LOCATION.STREET]: locationActions.updateLocationStreet,
        [LOCATION.ZIP]: locationActions.updateLocationZip,
        [LOCATION.CITY]: locationActions.updateLocationCity,
        updateLocation: locationActions.updateLocationFromUniversitySearch,
        universities: universitiesActions.searchUniversities
    };
    const actions = {
        contact: bindActionCreators(contact, dispatch),
        appointment: bindActionCreators(appointment, dispatch),
        location: bindActionCreators(location, dispatch)
    };
	return {actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTabPage);
