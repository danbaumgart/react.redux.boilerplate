import React from '../../utils/react';
import INSTITUTION from './constants/institution';
import {Typeahead, Paper, TextField, Checkbox} from '../../ui/inputs';
import LOCATION from './constants/locationProperties';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class LocationForm extends React.PureComponent {
    constructor(props, context){
        super(props, context)
    }
    render(){
        const {institution, name, street, city, state, zip, universities, actions} = this.props;
        console.log("NAME", name);
        return (
            <Paper>
                <Checkbox name={LOCATION.INSTITUTION}
                          label="University"
                          value={institution === INSTITUTION.UNIVERSITY}
                          onChange={actions[LOCATION.INSTITUTION]}/>
                {institution === INSTITUTION.UNIVERSITY ?
                    <Typeahead name="universitySearch"
                               promise={actions.universities}
                               onSelect={actions.updateLocation}
                               searchText={name}
                               onUpdateInput={actions[LOCATION.NAME]}
                               dataSource={universities}
                               debounce={200}/> :
                    <TextField name={LOCATION.NAME}
                               label={camelCaseToProperCase(LOCATION.NAME)}
                               value={name}
                               onChange={actions[LOCATION.NAME]}/>
                }
                <TextField name={LOCATION.STREET}
                           label={camelCaseToProperCase(LOCATION.STREET)}
                           value={street}
                           onChange={actions[LOCATION.STREET]}/>
                <TextField name={LOCATION.CITY}
                           label={camelCaseToProperCase(LOCATION.CITY)}
                           value={city}
                           onChange={actions[LOCATION.CITY]}/>
                <TextField name={LOCATION.STATE}
                           label={camelCaseToProperCase(LOCATION.STATE)}
                           value={state}
                           onChange={actions[LOCATION.STATE]}/>
                <TextField name={LOCATION.ZIP}
                           label={camelCaseToProperCase(LOCATION.ZIP)}
                           value={zip}
                           onChange={actions[LOCATION.ZIP]}/>

            </Paper>);
    }
}

LocationForm.propTypes = {
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


export default LocationForm;
