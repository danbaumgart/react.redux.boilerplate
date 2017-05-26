import React from '../../utils/react';
import {TextField, Paper, MaskedField, PhoneNumber} from '../../ui/inputs';
import MASKS from '../../ui/constants/inputMasks';
import {FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, PHONE_NUMBER, EXTENSION} from './constants/properties';
const ContactForm = ({firstName, lastName, emailAddress, phoneNumber, extension, actions, children}) => {
    return (
        <Paper style={{margin: "10px"}}>
            <TextField name={FIRST_NAME}
                       value={firstName}
                       onChange={actions[FIRST_NAME]}/>
            <TextField name={LAST_NAME}
                       value={lastName}
                       onChange={actions[LAST_NAME]}/>
            <TextField name={EMAIL_ADDRESS}
                       value={emailAddress}
                       onChange={actions[EMAIL_ADDRESS]}/>
            <PhoneNumber name={PHONE_NUMBER}
                         value={phoneNumber}
                         onChange={actions[PHONE_NUMBER]}/>
            <MaskedField name={EXTENSION}
                         value={extension}
                         onChange={actions[EXTENSION]}
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
    children: React.PropTypes.node
};

ContactForm.defaultProps = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    phoneNumber: null,
    extension: null,
    children: null
};

export default ContactForm;
