import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HorizontalStepper from '../../ui/navigation/horizontalTransition';
import APPOINTMENT from '../../config/properties/appointment';
import CONTACT from '../../config/properties/contact';
import StepHandler from './handlers/appointmentStepHandler';
import * as contactActions from '../../actions/creators/contact';
import APPOINTMENT_STEPS from './constants/appointmentSteps';
const AppointmentStepLabels = Object.keys(APPOINTMENT_STEPS);
class AppointmentPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {stepErrors} = this.props;
        const stepViews = AppointmentStepLabels.map(label => StepHandler[label]);
        const props = {stepErrors, stepViews, stepLabels: AppointmentStepLabels};
        return <HorizontalStepper {...props} />;
    }
}
AppointmentPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    stepErrors: React.PropTypes.arrayOf(React.PropTypes.bool)
};
AppointmentPage.defaultProps = {
    stepErrors: null
};
function mapStateToProps(state, ownProps) {
    const {appointment, contact, location} = state.errorInfo;
    const ErrorHandler = {
        [APPOINTMENT_STEPS.CONTACT]: contact,
        [APPOINTMENT_STEPS.SCHEDULING]: appointment,
        [APPOINTMENT_STEPS.LOCATION]: location,
    };
    return {stepErrors: AppointmentStepLabels.map(label => {
        const errorObject = ErrorHandler[label];
        return errorObject && Object.keys(errorObject).some(key =>
            Array.isArray(errorObject[key]) && errorObject[key].length > 0)
    })};
}
function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({
        saveContact: contactActions.saveContact
    }, dispatch);
    return {actions};
}
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
