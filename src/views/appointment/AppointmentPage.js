import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HorizontalStepper from '../../ui/navigation/horizontalTransition';
import APPOINTMENT from '../../config/properties/appointment';
import CONTACT from '../../config/properties/contact';
import StepHandler from './handlers/appointmentStepHandler';
import * as contactActions from '../../actions/creators/contact';
import * as appointmentActions from '../../actions/creators/appointment';
import APPOINTMENT_STEPS from './constants/appointmentSteps';
const AppointmentStepLabels = Object.keys(APPOINTMENT_STEPS);
class AppointmentPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    static GetStepContent(stepIndex) {
        const key = AppointmentStepLabels[stepIndex];
        return StepHandler[key];
    }
    render() {
        return <HorizontalStepper stepLabels={AppointmentStepLabels}
                                  getStepContent={AppointmentPage.GetStepContent}/>;
    }
}
AppointmentPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    appointment: React.PropTypes.object,
    contact: React.PropTypes.object
};
AppointmentPage.defaultProps = {
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
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
