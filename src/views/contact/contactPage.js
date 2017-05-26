import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactForm from './contactForm';
import {RaisedButton} from '../../ui/inputs';
import {FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, PHONE_NUMBER, EXTENSION} from './constants/properties';
import * as actions from '../../actions/contactActionCreators';
import {toastError, toastSuccess} from '../../actions/alertsActions';
class ContactPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.saveContact = this.saveContact.bind(this);
    }
    saveContact(event){
        const {lastName, firstName, emailAddress, phoneNumber, extension, actions, ...props} = this.props;
        const contact = {lastName, firstName, emailAddress, phoneNumber, extension};
        console.log("SAVE", contact);
        actions.saveContact(contact).then(result => {
            console.log("RESULT", result);
            actions.toastSuccess({contact: ["SUCCESS"]});
        }).catch(err => {
            console.log("RESULT", err);
            actions.toastError({contact: [err.status.type]})
        });
    }
    render() {
        const {firstName, lastName, emailAddress, phoneNumber, extension, actions} = this.props;
        const props = {firstName, lastName, emailAddress, phoneNumber, extension, actions};
        return (<ContactForm {...props}>
            <RaisedButton onClick={this.saveContact} label="Submit" />
        </ContactForm>);
    }
}
ContactPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    extension: React.PropTypes.string
};

ContactPage.defaultProps = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    phoneNumber: null,
    extension: null
};

function mapStateToProps(state) {
    const {firstName, lastName, emailAddress, phoneNumber, extension} = state.contact;
    return {firstName, lastName, emailAddress, phoneNumber, extension};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [FIRST_NAME]: actions.updateContactFirstName,
            [LAST_NAME]: actions.updateContactLastName,
            [EMAIL_ADDRESS]: actions.updateContactEmailAddress,
            [PHONE_NUMBER]: actions.updateContactPhoneNumber,
            [EXTENSION]: actions.updateContactExtension,
            saveContact: actions.saveContact,
            toastError, toastSuccess
        }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
