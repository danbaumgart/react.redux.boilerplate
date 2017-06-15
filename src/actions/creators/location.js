import ACTIONS from '../types/locations';
import INSTITUTION from '../../views/appointment/constants/institution';
function _updateLocationName(name){
    return {type: ACTIONS.UPDATE_LOCATION_NAME, payload: name};
}
function _updateLocationInstitution(institution){
    return {type: ACTIONS.UPDATE_LOCATION_INSTITUTION, payload: institution};
}
function _updateLocation(location) {
    return {type: ACTIONS.UPDATE_LOCATION, payload: location};
}
function _updateLocationCity(city) {
    return {type: ACTIONS.UPDATE_LOCATION_CITY, payload: city};
}
function _updateLocationState(state) {
    return {type: ACTIONS.UPDATE_LOCATION_STATE, payload: state};
}
function _updateLocationStreet(street) {
    return {type: ACTIONS.UPDATE_LOCATION_STREET, payload: street};
}
function _updateLocationZip(zip) {
    return {type: ACTIONS.UPDATE_LOCATION_ZIP, payload: zip};
}
export const updateLocationName = name => function(dispatch){
    dispatch(_updateLocationName(name));
};
export const updateLocationCity = city => function(dispatch){
    dispatch(_updateLocationCity(city));
};
export const updateLocationState = state => function(dispatch){
    dispatch(_updateLocationState(state));
};
export const updateLocationStreet = street => function(dispatch){
    dispatch(_updateLocationStreet(street));
};
export const updateLocationZip = zip => function(dispatch){
    dispatch(_updateLocationZip(zip));
};
export const updateLocationFromUniversitySearch = university => function(dispatch){
    const {id, ...location} = university;
    location.institution = INSTITUTION.UNIVERSITY;
    dispatch(_updateLocation(location));
};
export const updateLocationInstitution = institution => function(dispatch){
    dispatch(_updateLocationInstitution(institution ? INSTITUTION.UNIVERSITY : INSTITUTION.OTHER));
};
