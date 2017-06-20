import React from '../../utils/react';
import {connect} from 'react-redux';
import INSTITUTION from '../appointment/constants/institution';
import {UniversityAutoComplete, Paper, TextField, Checkbox, SelectField} from '../../ui/inputs';
import LOCATION from '../../config/properties/location';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class LocationForm extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const {institution, name, street, city, state, zip, states, onChange, actions, onUpdateLocation, errorInfo} = this.props;
        const isUniversityInstitution = institution === INSTITUTION.UNIVERSITY;
        return (
            <Paper>
                <Checkbox name={LOCATION.INSTITUTION}
                          label="University"
                          value={institution === INSTITUTION.UNIVERSITY}
                          onChange={onChange}/>
                {isUniversityInstitution ? <UniversityAutoComplete /> :
                    <TextField name={LOCATION.NAME}
                               label={camelCaseToProperCase(LOCATION.NAME)}
                               value={name}
                               errors={errorInfo && errorInfo[LOCATION.NAME]}
                               onChange={onChange}/>
                }
                <TextField name={LOCATION.STREET}
                           label={camelCaseToProperCase(LOCATION.STREET)}
                           value={street}
                           errors={errorInfo && errorInfo[LOCATION.STREET]}
                           onChange={onChange}/>
                <TextField name={LOCATION.CITY}
                           label={camelCaseToProperCase(LOCATION.CITY)}
                           value={city}
                           disabled={isUniversityInstitution}
                           errors={errorInfo && errorInfo[LOCATION.CITY]}
                           onChange={onChange}/>
                <SelectField name={LOCATION.STATE}
                             label={camelCaseToProperCase(LOCATION.STATE)}
                             value={state}
                             errors={errorInfo && errorInfo[LOCATION.STATE]}
                             dataSource={states}
                             disabled={isUniversityInstitution}
                             onChange={onChange}/>
                <TextField name={LOCATION.ZIP}
                           label={camelCaseToProperCase(LOCATION.ZIP)}
                           value={zip}
                           disabled={isUniversityInstitution}
                           errors={errorInfo && errorInfo[LOCATION.ZIP]}
                           onChange={onChange}/>
            </Paper>);
    }
}

LocationForm.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onUpdateLocation: React.PropTypes.func.isRequired,
    states: React.PropTypes.arrayOf(React.PropTypes.object),
    institution: React.PropTypes.oneOf([INSTITUTION.HIGH_SCHOOL, INSTITUTION.UNIVERSITY, INSTITUTION.OTHER]),
    name: React.PropTypes.string,
    street: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    postalCode: React.PropTypes.string,
    errorInfo: React.PropTypes.object,
};
LocationForm.defaultProps = {
    institution: INSTITUTION.OTHER,
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    details: '',
    errorInfo: null
};
function mapStateToProps(state, ownProps) {
    const {states} = state;
    return {states};
}
export default connect(mapStateToProps, null)(LocationForm);
