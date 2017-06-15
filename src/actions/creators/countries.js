import ACTIONS from '../types/countries';
import Countries from '../../services/countries';
function _loadCountries(countries){
    return {type: ACTIONS.LOAD_COUNTRIES, payload: countries};
}
export function loadCountries() {
    return function(dispatch){
        return Countries.Get()
            .then(countries => dispatch(_loadCountries(countries.content)));
    }
}
