import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactForm from './contactForm';
import CONTACT from '../../config/properties/contact';
import * as actions from '../../actions/creators/contact';
import ContactSchema from '../../config/schema/contact';
import SchemaMapper from '../../config/schema/mapper';
class ContactPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }
    componentWillUnmount(){
        const {firstName, lastName, emailAddress, phoneNumber, extension} = this.props;
        const form = {firstName, lastName, emailAddress, phoneNumber, extension};
        const errorInfo = SchemaMapper.toFormErrors(form, ContactSchema);
        this.props.actions.updateContactErrorInfo(errorInfo);
    }
    saveContact(){
        const {actions, errorInfo, ...contact} = this.props;
        actions.saveContact(contact)
            .then(result => actions.toastSuccess({contact: ["SUCCESS"]}))
            .catch(err => actions.toastError({contact: [err.status.type]}));
    }
    onChange(name, value) {
        const errorInfo = SchemaMapper.toFieldErrors(name, value, ContactSchema[name]);
        this.props.actions[name](value);
        this.props.actions.updateContactErrorInfo(errorInfo);
    }
    render() {
        const {firstName, lastName, emailAddress, phoneNumber, extension, errorInfo} = this.props;

        const props = {
            errorInfo, firstName, lastName, emailAddress, phoneNumber, extension,
            onChange: this.onChange
        };
        return <ContactForm {...props} />;
    }
}
ContactPage.propTypes = {
    actions: React.PropTypes.object,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    extension: React.PropTypes.string,
    errorInfo: React.PropTypes.object,
};

ContactPage.defaultProps = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    phoneNumber: null,
    extension: null,
    errorInfo: null
};

function mapStateToProps(state) {
    const {firstName, lastName, emailAddress, phoneNumber, extension} = state.contact;
    const {contact: errorInfo} = state.errorInfo;
    return {firstName, lastName, emailAddress, phoneNumber, extension, errorInfo};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [CONTACT.FIRST_NAME]: actions.updateContactFirstName,
            [CONTACT.LAST_NAME]: actions.updateContactLastName,
            [CONTACT.EMAIL_ADDRESS]: actions.updateContactEmailAddress,
            [CONTACT.PHONE_NUMBER]: actions.updateContactPhoneNumber,
            [CONTACT.EXTENSION]: actions.updateContactExtension,
            updateContactErrorInfo: actions.updateContactErrorInfo
        }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
