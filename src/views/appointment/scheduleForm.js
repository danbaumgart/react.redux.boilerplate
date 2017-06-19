import React from '../../utils/react';
import {DatePicker, TimePicker, Checkbox, TextArea} from '../../ui/inputs';
import Paper, {POSITION, DISPLAY} from '../../ui/common/paper';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import APPOINTMENT from '../../config/properties/appointment';
const AppointmentForm = ({date, time, flexible, details, errorInfo, onChange}) => (
    <Paper>
    <DatePicker name={APPOINTMENT.DATE}
                value={date}
                errors={errorInfo && errorInfo[APPOINTMENT.DATE]}
                onChange={onChange}/>
    <TimePicker name={APPOINTMENT.TIME}
                value={time}
                errors={errorInfo && errorInfo[APPOINTMENT.TIME]}
                onChange={onChange}/>
    <Checkbox name={APPOINTMENT.FLEXIBLE}
              value={flexible}
              errors={errorInfo && errorInfo[APPOINTMENT.FLEXIBLE]}
              onChange={onChange}/>
    <TextArea name={APPOINTMENT.DETAILS}
              value={details}
              errors={errorInfo && errorInfo[APPOINTMENT.DETAILS]}
              onChange={onChange}/>
</Paper>);
AppointmentForm.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    errorInfo: React.PropTypes.object,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string
};
AppointmentForm.defaultProps = {
    errorInfo: null,
    date: DateTime.ToDateModel(),
    time: DateTime.ToTimeModel(),
    flexible: false,
    details: null
};

export default AppointmentForm;
