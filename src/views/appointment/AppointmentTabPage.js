import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SwipeableTabs from '../../ui/SwipeableTabs';
import ContactForm from '../contact/contactForm';
import APPOINTMENT from '../../config/properties/appointment';
import CONTACT from '../../config/properties/contact';
import AppointmentForm from './scheduleForm';
import LocationPage from '../location/locationPage';
import ContactSchema from '../../config/schema/contact';
import SchemaMapper from '../../config/schema/mapper';
import * as contactActions from '../../actions/creators/contact';
import * as appointmentActions from '../../actions/creators/appointment';
class AppointmentTabPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.getContactProps = this.getContactProps.bind(this);
        this.getAppointmentProps = this.getAppointmentProps.bind(this);
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
	render() {
        const tabs = ['Contact Info', 'Schedule', 'Location'];
        const appointmentProps = this.getAppointmentProps();
        const contactProps = this.getContactProps();
        const views = [
            <ContactForm {...contactProps} />,
            <AppointmentForm {...appointmentProps} />,
            <LocationPage />
        ];
	    return <SwipeableTabs views={views} tabs={tabs} />;
	}
}
AppointmentTabPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
	appointment: React.PropTypes.object,
    contact: React.PropTypes.object
};
AppointmentTabPage.defaultProps = {
    appointment: null,
    contact: null
};

function mapStateToProps(state, ownProps) {
    const {appointment, contact} = state;
    return {appointment, contact};
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
    const actions = {
        contact: bindActionCreators(contact, dispatch),
        appointment: bindActionCreators(appointment, dispatch)
    };
	return {actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTabPage);
