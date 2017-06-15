import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppointmentForm from './scheduleForm';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import APPOINTMENT from '../../config/properties/appointment';
import * as actions from '../../actions/creators/appointment';
class SchedulePage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<AppointmentForm {...this.props} />);
    }
}

SchedulePage.propTypes = {
    actions: React.PropTypes.object,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string
};

SchedulePage.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
