import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactForm from './contactForm';
import {RaisedButton} from '../../ui/inputs';
import CONTACT_PROPERTIES from '../../config/schema/constants/contactProperties';
import * as actions from '../../actions/contactActionCreators';
import {toastError, toastSuccess} from '../../actions/alertsActions';
import ContactSchema from '../../config/schema/contactSchema';
import SchemaMapper from '../../config/schema/utils/schemaMappers';
class ContactPage extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.saveContact = this.saveContact.bind(this);
    }
    saveContact(event){
        const {lastName, firstName, emailAddress, phoneNumber, extension, actions, ...props} = this.props;
        const contact = {lastName, firstName, emailAddress, phoneNumber, extension};
        actions.saveContact(contact).then(result => {
            actions.toastSuccess({contact: ["SUCCESS"]});
        }).catch(err => {
            actions.toastError({contact: [err.status.type]})
        });
    }
    render() {
        const {actions, ...fields} = this.props;
        const formSchema = SchemaMapper.toSchemaModel(ContactSchema);
        const errors = formSchema.map(fieldSchema => ({
            [fieldSchema.name]: fieldSchema.isInvalid(this.props[fieldSchema.name]) ? fieldSchema.errors : []
        }));
        const errorInfo = SchemaMapper.toErrorInfo(errors);
        const {firstName, lastName, emailAddress, phoneNumber, extension} = fields;
        const props = {firstName, lastName, emailAddress, phoneNumber, extension, errorInfo, actions};
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
            [CONTACT_PROPERTIES.FIRST_NAME]: actions.updateContactFirstName,
            [CONTACT_PROPERTIES.LAST_NAME]: actions.updateContactLastName,
            [CONTACT_PROPERTIES.EMAIL_ADDRESS]: actions.updateContactEmailAddress,
            [CONTACT_PROPERTIES.PHONE_NUMBER]: actions.updateContactPhoneNumber,
            [CONTACT_PROPERTIES.EXTENSION]: actions.updateContactExtension,
            saveContact: actions.saveContact,
            toastError, toastSuccess
        }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
