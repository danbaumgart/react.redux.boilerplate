import React from '../../utils/react';
import {TextField, MaskedField, PhoneNumber} from '../../ui/inputs';
import Paper from '../../ui/common/paper';
import MASKS from '../../ui/constants/masks';
import CONTACT from '../../config/properties/contact';
const ContactForm = ({firstName, lastName, emailAddress, phoneNumber, extension, errorInfo, actions, children}) => {
    return (
        <Paper zDepth={0}>
            <TextField name={CONTACT.FIRST_NAME}
                       value={firstName}
                       errors={errorInfo[CONTACT.FIRST_NAME]}
                       onChange={actions[CONTACT.FIRST_NAME]}/>
            <TextField name={CONTACT.LAST_NAME}
                       value={lastName}
                       errors={errorInfo[CONTACT.LAST_NAME]}
                       onChange={actions[CONTACT.LAST_NAME]}/>
            <TextField name={CONTACT.EMAIL_ADDRESS}
                       value={emailAddress}
                       errors={errorInfo[CONTACT.EMAIL_ADDRESS]}
                       onChange={actions[CONTACT.EMAIL_ADDRESS]}/>
            <PhoneNumber name={CONTACT.PHONE_NUMBER}
                         value={phoneNumber}
                         errors={errorInfo[CONTACT.PHONE_NUMBER]}
                         onChange={actions[CONTACT.PHONE_NUMBER]}/>
            <MaskedField name={CONTACT.EXTENSION}
                         value={extension}
                         onChange={actions[CONTACT.EXTENSION]}
                         mask={MASKS.EXTENSION}/>
            {children}
        </Paper>);
};

ContactForm.propTypes = {
    actions: React.PropTypes.object.isRequired,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    emailAddress: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    extension: React.PropTypes.string,
    errorInfo: React.PropTypes.object,
    children: React.PropTypes.node
};

ContactForm.defaultProps = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    phoneNumber: null,
    extension: null,
    errorInfo: null,
    children: null
};

export default ContactForm;
