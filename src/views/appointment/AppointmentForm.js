import React from '../../utils/react';
import {DatePicker, TimePicker, Checkbox, TextArea, Paper} from '../../ui/inputs';
import {DateTime, DateModel, TimeModel} from '../../utils/model/dateTimeModel';
import {DETAILS, DATE, TIME, FLEXIBLE} from './constants/properties';
const AppointmentForm = ({date, time, flexible, details, actions}) => (<Paper style={{margin: "10px"}}>
        <DatePicker name={DATE}
                    value={date}
                    onChange={actions[DATE]}/>
        <TimePicker name={TIME}
                    value={time}
                    onChange={actions[TIME]}/>
        <Checkbox name={FLEXIBLE}
                  value={flexible}
                  onChange={actions[FLEXIBLE]}/>
        <TextArea name={DETAILS}
                  value={details}
                  onChange={actions[DETAILS]}/>
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
