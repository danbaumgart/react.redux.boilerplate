import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppointmentForm from './appointmentForm';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import APPOINTMENT from './constants/appointmentProperties';
import * as actions from '../../actions/appointmentActionCreators';
class AppointmentPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const props = this.props;
        return (<AppointmentForm {...props} />);
    }
}

AppointmentPage.propTypes = {
    actions: React.PropTypes.object,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string
};

AppointmentPage.defaultProps = {
    actions: null,
    date: DateTime.ToDateModel(),
    time: DateTime.ToTimeModel(),
    flexible: false,
    details: null
};

function mapStateToProps(state) {
    return state.appointment || {
        date: '',
        time: '',
        flexible: false,
        details: ''
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [APPOINTMENT.DATE]: actions.updateAppointmentDate,
            [APPOINTMENT.TIME]: actions.updateAppointmentTime,
            [APPOINTMENT.DETAILS]: actions.updateAppointmentDetails,
            [APPOINTMENT.FLEXIBLE]: actions.updateAppointmentFlexible}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
