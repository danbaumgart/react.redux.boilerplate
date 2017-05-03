import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SwipeableTabs from '../../ui/SwipeableTabs';
import {DatePicker, TextField, TimePicker, Checkbox} from 'material-ui';
import LoginForm from '../account/LoginForm';
import RegistrationForm from '../account/RegistrationForm';
import * as actions from '../../actions/appointmentActions';
import PageTitle from '../../components/common/PageTitle';
class AppointmentPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		    date: null,
            time: null,
            flexible: false,
            location: null,
            details: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            extension: ''
        };
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateField = this.updateField.bind(this);
	}
	updateDate(something, date){
        this.setState({date});
    }
    updateTime(something, time){
        this.setState({time});
    }
    updateField(event){
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
	render() {
        const textFieldStyle = {width: '100%'};
	    const {date, time, flexible, firstName, lastName, emailAddress, phoneNumber, extension, details} = this.state;
	    const account = {lastName: '', firstName: '', emailAddress: '', password: '', confirmPassword: ''};
        const other = {update: () => null, save: () => null, saving: false};
	    const user = {emailAddress: '', password: '', rememberMe: ''};
        const tabObjects = [
            {
                label: "Registration",
                Content: <RegistrationForm account={account} save={other.save} saving={other.saving} update={other.update} />
            },
            {
                label: "Login",
                Content: <LoginForm user={user} save={other.save} saving={other.saving} update={other.update} />
            }
        ];
	    return (
		    <div>
                <SwipeableTabs views={tabObjects} />
                {/*<TextField name="FirstName"*/}
                           {/*defaultValue={firstName}*/}
                           {/*hintText="First Name"*/}
                           {/*floatingLabelText="First Name"*/}
                           {/*fullWidth={true}*/}
                           {/*onChange={this.updateField} />*/}
                {/*<TextField name="LastName"*/}
                           {/*defaultValue={lastName}*/}
                           {/*hintText="Last Name"*/}
                           {/*floatingLabelText="Last Name"*/}
                           {/*fullWidth={true}*/}
                           {/*onChange={this.updateField} />*/}
                {/*<TextField name="EmailAddress"*/}
                           {/*hintText="Email Address"*/}
                           {/*defaultValue={emailAddress}*/}
                           {/*floatingLabelText="Email Address"*/}
                           {/*fullWidth={true}*/}
                           {/*onChange={this.updateField} />*/}
                {/*<TextField name="PhoneNumber"*/}
                           {/*hintText="Phone Number"*/}
                           {/*defaultValue={phoneNumber}*/}
                           {/*floatingLabelText="Phone Number"*/}
                           {/*fullWidth={true}*/}
                           {/*onChange={this.updateField} />*/}
                {/*<DatePicker hintText="Appointment Date"*/}
                            {/*value={date}*/}
                            {/*floatingLabelText="Appointment Date"*/}
                            {/*onChange={this.updateDate}*/}
                            {/*container="inline"*/}
                            {/*autoOk={true}*/}
                            {/*textFieldStyle={textFieldStyle}*/}
                            {/*mode="landscape" />*/}
                {/*<TimePicker name="time"*/}
                            {/*hintText="Appointment Time"*/}
                            {/*textFieldStyle={textFieldStyle}*/}
                            {/*floatingLabelText="Appointment Time"*/}
                            {/*defaultTime={time}*/}
                            {/*autoOk={true}*/}
                            {/*onChange={this.updateTime} />*/}
                {/*<Checkbox name="Flexible" defaultChecked={flexible} label="Flexible" onCheck={this.updateField}/>*/}
                {/*<TextField name="Details"*/}
                           {/*defaultValue={details}*/}
                           {/*floatingLabelText="Details"*/}
                           {/*fullWidth={true}*/}
                           {/*multiLine={true}*/}
                           {/*rows={2}*/}
                           {/*rowsMax={6}*/}
                           {/*onChange={this.updateField} />*/}
            </div>
		);
	}
}

AppointmentPage.propTypes = {
	appointment: PropTypes.object
};

AppointmentPage.defaultProps = {
	//title: Appointment
};

function mapStateToProps(state, ownProps) {
	const {appointment} = state;
	return {appointment};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);
