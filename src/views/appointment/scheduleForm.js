import React from '../../utils/react';
import {DatePicker, TimePicker, Checkbox, TextArea, Paper} from '../../ui/inputs';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import APPOINTMENT from '../../config/properties/appointment';
const AppointmentForm = ({date, time, flexible, details, actions}) => (<Paper style={{margin: "10px"}}>
    <DatePicker name={APPOINTMENT.DATE}
                value={date}
                onChange={actions[APPOINTMENT.DATE]}/>
    <TimePicker name={APPOINTMENT.TIME}
                value={time}
                onChange={actions[APPOINTMENT.TIME]}/>
    <Checkbox name={APPOINTMENT.FLEXIBLE}
              value={flexible}
              onChange={actions[APPOINTMENT.FLEXIBLE]}/>
    <TextArea name={APPOINTMENT.DETAILS}
              value={details}
              onChange={actions[APPOINTMENT.DETAILS]}/>
</Paper>);
AppointmentForm.propTypes = {
    actions: React.PropTypes.object.isRequired,
    date: React.PropTypes.instanceOf(DateModel),
    time: React.PropTypes.instanceOf(TimeModel),
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string
};
AppointmentForm.defaultProps = {
    date: DateTime.ToDateModel(),
    time: DateTime.ToTimeModel(),
    flexible: false,
    details: null
};

export default AppointmentForm;
