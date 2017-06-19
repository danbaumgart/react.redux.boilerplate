import React from '../../utils/react';
import {connect} from 'react-redux';
import INSTITUTION from '../appointment/constants/institution';
import {AutoComplete, Paper, TextField, Checkbox, SelectField} from '../../ui/inputs';
import LOCATION from '../../config/properties/location';
import {bindActionCreators} from 'redux';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import {searchUniversities} from '../../actions/creators/universities';
class LocationForm extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {institution, name, street, city, state, zip, universities, states, onChange, actions, onUpdateLocation, errorInfo} = this.props;
        return (
            <Paper>
                <Checkbox name={LOCATION.INSTITUTION}
                          label="University"
                          value={institution === INSTITUTION.UNIVERSITY}
                          onChange={onChange}/>
                {institution === INSTITUTION.UNIVERSITY ?
                    <AutoComplete name={LOCATION.NAME}
                                  promise={actions.searchUniversities}
                                  onSelect={onUpdateLocation}
                                  searchText={name}
                                  errors={errorInfo && errorInfo[LOCATION.NAME]}
                                  onUpdateInput={onChange}
                                  dataSource={universities}
                                  debounce={200}/> :
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
                           errors={errorInfo && errorInfo[LOCATION.CITY]}
                           onChange={onChange}/>
                <SelectField name={LOCATION.STATE}
                             label={camelCaseToProperCase(LOCATION.STATE)}
                             value={state}
                             errors={errorInfo && errorInfo[LOCATION.STATE]}
                             dataSource={states}
                             onChange={onChange}/>
                <TextField name={LOCATION.ZIP}
                           label={camelCaseToProperCase(LOCATION.ZIP)}
                           value={zip}
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
    universities: React.PropTypes.arrayOf(React.PropTypes.object),
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
    universities: [],
    errorInfo: null
};
function mapStateToProps(state, ownProps) {
    const {universities: _universities, states} = state;
    const universities = Array.isArray(_universities) && _universities.length > 0 ? _universities.slice() : [];
    return {universities, states};
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({searchUniversities}, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
