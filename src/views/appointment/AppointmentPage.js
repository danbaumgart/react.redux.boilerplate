import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppointmentForm from './appointmentForm';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import {DATE, TIME, DETAILS, FLEXIBLE} from './constants/properties';
import {
    updateAppointmentDetails,
    updateAppointmentDate,
    updateAppointmentTime,
    updateAppointmentFlexible,
} from '../../actions/appointmentActionCreators';
class AppointmentPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {date, time, flexible, details, actions} = this.props;
        const props = {date, time, flexible, details, actions};
        return (<AppointmentForm {...props} />);
    }
}

AppointmentPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string
};

AppointmentPage.defaultProps = {
    date: DateTime.ToDateModel(),
    time: DateTime.ToTimeModel(),
    flexible: false,
    details: null
};

function mapStateToProps(state) {
    const {date, time, flexible, details} = state.appointment;
    return {date, time, flexible, details};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [DATE]: updateAppointmentDate,
            [TIME]: updateAppointmentTime,
            [DETAILS]: updateAppointmentDetails,
            [FLEXIBLE]: updateAppointmentFlexible}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
