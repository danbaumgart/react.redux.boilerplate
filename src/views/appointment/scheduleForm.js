import React, {PropTypes} from 'react';
import {DatePicker, TextField, TimePicker, Checkbox} from 'material-ui';
const AppointmentForm = ({date, time, flexible, details, updateField, updateDate, updateTime, textFieldStyle}) => {
    return (<div>
        <DatePicker hintText="Appointment Date"
                    defaultDate={date || new Date()}
                    floatingLabelText="Appointment Date"
                    onChange={updateDate}
                    container="inline"
                    autoOk={true}
                    textFieldStyle={textFieldStyle}
                    mode="landscape"/>
        <TimePicker name="time"
                    hintText="Appointment Time"
                    textFieldStyle={textFieldStyle}
                    floatingLabelText="Appointment Time"
                    defaultTime={time}
                    autoOk={true}
                    onChange={updateTime}/>
        <Checkbox name="Flexible" defaultChecked={flexible} label="Flexible" onCheck={updateField}/>
        <TextField name="Details"
                   defaultValue={details}
                   floatingLabelText="Details"
                   fullWidth={true}
                   multiLine={true}
                   rows={2}
                   rowsMax={6}
                   onChange={updateField}/>
    </div>);
};

AppointmentForm.propTypes = {
    updateField: React.PropTypes.func.isRequired,
    updateDate: React.PropTypes.func.isRequired,
    updateTime: React.PropTypes.func.isRequired,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    date: React.PropTypes.string,
    time: React.PropTypes.string,
    flexible: React.PropTypes.bool,
    details: React.PropTypes.string,
    textFieldStyle: React.PropTypes.object
};
AppointmentForm.defaultProps = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    date: new Date(),
    time: '',
    flexible: false,
    details: '',
    textFieldStyle: null
};


export default AppointmentForm;
