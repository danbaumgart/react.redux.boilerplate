import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactForm from './contactForm';
import {RaisedButton} from '../../ui/inputs';
import CONTACT from '../../config/properties/contact';
import * as actions from '../../actions/creators/contact';
import {toastError, toastSuccess} from '../../actions/alertsActions';
import ContactSchema from '../../config/schema/contact';
import SchemaMapper from '../../config/schema/mapper';
class ContactPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.saveContact = this.saveContact.bind(this);
    }
    saveContact(){
        const {actions, ...contact} = this.props;
        actions.saveContact(contact)
            .then(result => actions.toastSuccess({contact: ["SUCCESS"]}))
            .catch(err => actions.toastError({contact: [err.status.type]}));
    }
    render() {
        const {actions, ...fields} = this.props;
        const errorInfo = SchemaMapper.toErrorInfoModel(ContactSchema, fields);
        const {firstName, lastName, emailAddress, phoneNumber, extension} = fields;
        const props = {errorInfo, firstName, lastName, emailAddress, phoneNumber, extension, actions};
        return <ContactForm {...props} />;
    }
}
ContactPage.propTypes = {
    actions: React.PropTypes.object,
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
            [CONTACT.FIRST_NAME]: actions.updateContactFirstName,
            [CONTACT.LAST_NAME]: actions.updateContactLastName,
            [CONTACT.EMAIL_ADDRESS]: actions.updateContactEmailAddress,
            [CONTACT.PHONE_NUMBER]: actions.updateContactPhoneNumber,
            [CONTACT.EXTENSION]: actions.updateContactExtension,
            saveContact: actions.saveContact,
            toastError, toastSuccess
        }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
