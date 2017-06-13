import React, {PropTypes} from 'react';
import INSTITUTION from './constants/institution';
import INPUT from '../../ui/constants/inputTypes';
import FormGroup from '../../ui/formGroup';
import {constantCaseToProperCase} from '../../utils/stringUtils';
import {DatePicker, TextField, TimePicker, Checkbox, RadioButton, RadioButtonGroup} from 'material-ui';
const LocationForm = ({institution, name, address, city, state, zip, details, updateField, updateDate, updateTime, textFieldStyle}) => {
    const schema = [
        {
            name: "streetAddress",
            type: INPUT.TEXT_FIELD,
            placeholder: null
        }
    ]
    return (<FormGroup>
        {/*<RadioButtonGroup name="Institution"*/}
                          {/*defaultSelected={INSTITUTION[institution] || INSTITUTION.OTHER}>*/}
            {/*<RadioButton value={INSTITUTION.UNIVERSITY}*/}
                         {/*label={constantCaseToProperCase(INSTITUTION.UNIVERSITY)}*/}
                         {/*onCheck={updateField}/>*/}
            {/*<RadioButton value={INSTITUTION.HIGH_SCHOOL}*/}
                         {/*label={constantCaseToProperCase(INSTITUTION.HIGH_SCHOOL)}*/}
                         {/*onCheck={updateField}/>*/}
            {/*<RadioButton value={INSTITUTION.OTHER}*/}
                         {/*label={constantCaseToProperCase(INSTITUTION.OTHER)}*/}
                         {/*onCheck={updateField}/>*/}
        {/*</RadioButtonGroup>*/}
        <TextField name="streetAddress"
                   defaultValue=""
                   hintText="Street"
                   floatingLabelText="Institution"
                   fullWidth={true}
                   onChange={updateField}/>
        <TextField name="streetAddress"
                   defaultValue={address}
                   hintText="Street Address"
                   floatingLabelText="Street Address"
                   fullWidth={true}
                   onChange={updateField}/>
        <TextField name="city"
                   hintText="City"
                   defaultValue={city}
                   floatingLabelText="City"
                   fullWidth={true}
                   onChange={updateField}/>
        <TextField name="stateProvince"
                   hintText="State or Province"
                   defaultValue={state}
                   floatingLabelText="State or Province"
                   fullWidth={true}
                   onChange={updateField}/>
        <TextField name="postalCode"
                   hintText="Postal Code"
                   defaultValue={zip}
                   floatingLabelText="Postal Code"
                   fullWidth={true}
                   onChange={updateField}/>
    </FormGroup>);
};

LocationForm.propTypes = {
    updateField: React.PropTypes.func.isRequired,
    updateDate: React.PropTypes.func.isRequired,
    updateTime: React.PropTypes.func.isRequired,
    institution: React.PropTypes.oneOf([INSTITUTION.HIGH_SCHOOL, INSTITUTION.UNIVERSITY, INSTITUTION.OTHER]),
    name: React.PropTypes.string,
    address: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    postalCode: React.PropTypes.string
};
LocationForm.defaultProps = {
    institution: INSTITUTION.OTHER,
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    details: ''
};


export default LocationForm;