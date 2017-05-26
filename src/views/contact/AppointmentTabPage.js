import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SwipeableTabs from '../../ui/SwipeableTabs';
import AppointmentForm from './contactForm';
import {DatePicker, TextField, TimePicker, Checkbox} from 'material-ui';
import LocationForm from './locationForm';
import RegistrationForm from '../account/RegistrationForm';
import {updateAppointmentConfirmation, updateAppointmentDate, updateAppointmentFlexible, updateAppointmentTime, updateAppointmentLocation} from '../../actions/appointmentActionCreators';
import {updateContactFirstName, updateContactLastName} from '../../actions/contactActionCreators';
import PageTitle from '../../ui/common/PageTitle';
class AppointmentTabPage extends React.Component {
	constructor(props, context) {
		super(props, context);
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateField = this.updateField.bind(this);
	}
	updateDate(something, date){
	    console.log("DATE", date);
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
        const {appointment} = this.props;
	    const {date, time, flexible, firstName, lastName, emailAddress, phoneNumber, extension, details} = this.props.appointment;
	    const account = {lastName: '', firstName: '', emailAddress: '', password: '', confirmPassword: ''};
        const other = {update: () => null, save: () => null, saving: false};
        const locationProps = {
            institution: null,
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            details: ''
        };
        console.log("THIS", this.mixins);
	    const user = {emailAddress: '', password: '', rememberMe: ''};
        const tabs = ["Contact Info", "Schedule", "Location"];
        const props = Object.assign({}, appointment, {
            updateField: this.updateField,
            updateDate: this.updateDate,
            updateTime: this.updateTime,
            textFieldStyle
        });
        this.props.actions.updateAppointmentFlexible(true);
        const views = [
            <AppointmentForm {...props} />,
            <RegistrationForm account={account} save={other.save} saving={other.saving} update={other.update} />,
            <LocationForm {...locationProps} />
        ];
	    return (
		    <div>
                <SwipeableTabs views={views} tabs={tabs} />
            </div>		);
	}
}
AppointmentTabPage.propTypes = {
	appointment: React.PropTypes.object
};
AppointmentTabPage.defaultProps = {
    appointment: {}
};

function mapStateToProps(state, ownProps) {
	const appointment = state.appointment || {
        date: '',
        time: '',
        flexible: false,
        details: ''
    };
    return {appointment};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({
            updateAppointmentDate,
            updateAppointmentTime,
            updateAppointmentFlexible,
            updateContactLastName,
            updateAppointmentConfirmation
        }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTabPage);
