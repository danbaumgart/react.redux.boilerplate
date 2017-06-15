import React from '../../utils/react';
import {connect} from 'react-redux';
import INSTITUTION from '../appointment/constants/institution';
import {AutoComplete, Paper, TextField, Checkbox} from '../../ui/inputs';
import LOCATION from '../../config/properties/location';
import {bindActionCreators} from 'redux';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import {searchUniversities} from '../../actions/creators/universities';
class LocationForm extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log("RENDERING LOCATION FORM PROPS", this.props);
        const {institution, name, street, city, state, zip, universities, onUpdate, actions} = this.props;
        return (
            <Paper>
                <Checkbox name={LOCATION.INSTITUTION}
                          label="University"
                          value={institution === INSTITUTION.UNIVERSITY}
                          onChange={onUpdate[LOCATION.INSTITUTION]}/>
                {institution === INSTITUTION.UNIVERSITY ?
                    <AutoComplete name="universitySearch"
                                  promise={actions.searchUniversities}
                                  onSelect={onUpdate.updateLocation}
                                  searchText={name}
                                  onUpdateInput={onUpdate[LOCATION.NAME]}
                                  dataSource={universities}
                                  debounce={200}/> :
                    <TextField name={LOCATION.NAME}
                               label={camelCaseToProperCase(LOCATION.NAME)}
                               value={name}
                               onChange={onUpdate[LOCATION.NAME]}/>
                }
                <TextField name={LOCATION.STREET}
                           label={camelCaseToProperCase(LOCATION.STREET)}
                           value={street}
                           onChange={onUpdate[LOCATION.STREET]}/>
                <TextField name={LOCATION.CITY}
                           label={camelCaseToProperCase(LOCATION.CITY)}
                           value={city}
                           onChange={onUpdate[LOCATION.CITY]}/>
                <TextField name={LOCATION.STATE}
                           label={camelCaseToProperCase(LOCATION.STATE)}
                           value={state}
                           onChange={onUpdate[LOCATION.STATE]}/>
                <TextField name={LOCATION.ZIP}
                           label={camelCaseToProperCase(LOCATION.ZIP)}
                           value={zip}
                           onChange={onUpdate[LOCATION.ZIP]}/>
            </Paper>);
    }
}

LocationForm.propTypes = {
    onUpdate: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
    institution: React.PropTypes.oneOf([INSTITUTION.HIGH_SCHOOL, INSTITUTION.UNIVERSITY, INSTITUTION.OTHER]),
    name: React.PropTypes.string,
    street: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    postalCode: React.PropTypes.string,
    universities: React.PropTypes.arrayOf(React.PropTypes.object)
};
LocationForm.defaultProps = {
    institution: INSTITUTION.OTHER,
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    details: '',
    universities: []
};
function mapStateToProps(state, ownProps) {
    const {universities: _universities} = state;
    const universities = Array.isArray(_universities) && _universities.length > 0 ? _universities.slice() : [];
    return {universities};
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({searchUniversities}, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
