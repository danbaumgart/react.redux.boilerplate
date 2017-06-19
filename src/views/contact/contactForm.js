import React from '../../utils/react';
import {TextField, MaskedField, PhoneNumber} from '../../ui/inputs';
import Paper from '../../ui/common/paper';
import MASKS from '../../ui/constants/masks';
import CONTACT from '../../config/properties/contact';
const ContactForm = ({firstName, lastName, emailAddress, phoneNumber, extension, errorInfo, onChange, children}) => {
    return (
        <Paper zDepth={0}>
            <TextField name={CONTACT.FIRST_NAME}
                       value={firstName}
                       errors={errorInfo && errorInfo[CONTACT.FIRST_NAME]}
                       onChange={onChange}/>
            <TextField name={CONTACT.LAST_NAME}
                       value={lastName}
                       errors={errorInfo && errorInfo[CONTACT.LAST_NAME]}
                       onChange={onChange}/>
            <TextField name={CONTACT.EMAIL_ADDRESS}
                       value={emailAddress}
                       errors={errorInfo && errorInfo[CONTACT.EMAIL_ADDRESS]}
                       onChange={onChange}/>
            <PhoneNumber name={CONTACT.PHONE_NUMBER}
                         value={phoneNumber}
                         errors={errorInfo && errorInfo[CONTACT.PHONE_NUMBER]}
                         onChange={onChange}/>
            <MaskedField name={CONTACT.EXTENSION}
                         value={extension}
                         onChange={onChange}
                         errors={errorInfo && errorInfo[CONTACT.EXTENSION]}
                         mask={MASKS.EXTENSION}/>
            {children}
        </Paper>);
};

ContactForm.propTypes = {
    onChange: React.PropTypes.func.isRequired,
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
