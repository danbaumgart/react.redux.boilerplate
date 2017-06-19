import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppointmentForm from './scheduleForm';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import APPOINTMENT from '../../config/properties/appointment';
import * as actions from '../../actions/creators/appointment';
import AppointmentSchema from '../../config/schema/appointment';
import SchemaMapper from '../../config/schema/mapper';
class SchedulePage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }
    componentWillUnmount(){
        const {date, time, details, flexible} = this.props;
        const form = {date, time, details, flexible};
        const errorInfo = SchemaMapper.toFormErrors(form, AppointmentSchema);
        this.props.actions.updateAppointmentErrorInfo(errorInfo);
    }
    onChange(name, value) {
        const errorInfo = SchemaMapper.toFieldErrors(name, value, AppointmentSchema[name]);
        console.log("VALUE", value, name, errorInfo);
        this.props.actions[name](value);
        this.props.actions.updateAppointmentErrorInfo(errorInfo);
    }
    render() {
        const {date, time, details, flexible, errorInfo} = this.props;
        const props = {date, time, details, flexible, errorInfo, onChange: this.onChange};
        return (<AppointmentForm {...props} />);
    }
}

SchedulePage.propTypes = {
    actions: React.PropTypes.object,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string,
    errorInfo: React.PropTypes.object
};

SchedulePage.defaultProps = {
    actions: null,
    date: null,
    time: null,
    flexible: false,
    details: null,
    errorInfo: null
};

function mapStateToProps(state) {
    const {date, time, flexible, details} = state.appointment;
    const {appointment: errorInfo} = state.errorInfo;
    return {date, time, flexible, details, errorInfo};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [APPOINTMENT.DATE]: actions.updateAppointmentDate,
            [APPOINTMENT.TIME]: actions.updateAppointmentTime,
            [APPOINTMENT.DETAILS]: actions.updateAppointmentDetails,
            [APPOINTMENT.FLEXIBLE]: actions.updateAppointmentFlexible,
            updateAppointmentErrorInfo: actions.updateAppointmentErrorInfo
        }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
