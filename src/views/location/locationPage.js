import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationForm from './locationForm';
import LOCATION from '../../config/properties/location';
import INSTITUTION from '../appointment/constants/institution';
import * as locationActions from '../../actions/creators/location';
import LocationSchema from '../../config/schema/location';
import SchemaMapper from '../../config/schema/mapper';
class LocationPage extends React.PureComponent {
    constructor(props, context){
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.onUpdateLocation = this.onUpdateLocation.bind(this);
    }
    componentWillUnmount(){
        const {institution, name, street, city, state, zip} = this.props;
        const form = {institution, name, street, city, state, zip};
        const errorInfo = SchemaMapper.toFormErrors(form, LocationSchema);
        this.props.actions.updateLocationErrorInfo(errorInfo);
    }
    onUpdateLocation(university) {
        const {name, street, city, state, zip} = university;
        const form = {institution: this.props.institution, name, street, city, state, zip};
        const errorInfo = SchemaMapper.toFormErrors(form, LocationSchema);
        this.props.actions.updateLocation(form);
        this.props.actions.updateLocationErrorInfo(errorInfo);
    }
    onChange(name, value) {
        console.log("LOCATION", LocationSchema, name, value);
        const errorInfo = SchemaMapper.toFieldErrors(name, value, LocationSchema[name]);
        this.props.actions[name](value);
        this.props.actions.updateLocationErrorInfo(errorInfo);
    }
    render(){
        const {institution, name, street, city, state, zip, errorInfo} = this.props;
        const props = {institution, name, street, city, state, zip, onChange: this.onChange, onUpdateLocation: this.onUpdateLocation, errorInfo};
        return <LocationForm {...props}/>;
    }
}
LocationPage.propTypes = {
    actions: React.PropTypes.object,
    errorInfo: React.PropTypes.object,
    location: React.PropTypes.object,
    institution: React.PropTypes.oneOf([INSTITUTION.HIGH_SCHOOL, INSTITUTION.UNIVERSITY, INSTITUTION.OTHER]),
    name: React.PropTypes.string,
    street: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    postalCode: React.PropTypes.string,
};
LocationPage.defaultProps = {
    actions: null,
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
    const {institution, name, street, city, state: _state, zip} = state.location;
    const {location: errorInfo} = state.errorInfo;
    const location = {institution, name, street, city, state: _state, zip, errorInfo};
    return location;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            [LOCATION.INSTITUTION]: locationActions.updateLocationInstitution,
            [LOCATION.NAME]: locationActions.updateLocationName,
            [LOCATION.STATE]: locationActions.updateLocationState,
            [LOCATION.STREET]: locationActions.updateLocationStreet,
            [LOCATION.ZIP]: locationActions.updateLocationZip,
            [LOCATION.CITY]: locationActions.updateLocationCity,
            updateLocation: locationActions.updateLocationFromUniversitySearch,
            updateLocationErrorInfo: locationActions.updateLocationErrorInfo
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
