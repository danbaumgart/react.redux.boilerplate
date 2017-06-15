import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationForm from './locationForm';
import LOCATION from '../../config/properties/location';
import * as locationActions from '../../actions/creators/location';
class LocationPage extends React.PureComponent {
    constructor(props, context){
        super(props, context);
    }
    render(){
        const {location: {institution, name, street, city, state, zip}, actions: onUpdate} = this.props;
        const props = {institution, name, street, city, state, zip, onUpdate};
        return <LocationForm {...props}/>;
    }
}
LocationPage.propTypes = {
    actions: React.PropTypes.object,
    location: React.PropTypes.object
};
LocationPage.defaultProps = {
    actions: null,
    location: null
};
function mapStateToProps(state, ownProps) {
    const {location: _location} = state;
    const {institution, name, street, city, state: _state, zip} = _location;
    const location = {institution, name, street, city, state: _state, zip};
    return {location};
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
            updateLocation: locationActions.updateLocationFromUniversitySearch
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
