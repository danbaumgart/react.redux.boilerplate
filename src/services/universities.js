import TrinitaWellness from './trinitaWellness';
import {UNIVERSITIES} from './constants/apiResources';
import {DETAILS} from './constants/endpoints/universitiesApi';
import {toQueryParameters} from '../http/utils/httpUtils';
class Universities extends TrinitaWellness {
    constructor() {
        super(UNIVERSITIES);
    }
    GetByName(name) {
        return super.Get(null, toQueryParameters({name})).then(result => result.content);
    }
    GetDetailsByName(name) {
        return super.Get(null, DETAILS + toQueryParameters({name})).then(result => result.content);
    }
}
export default new Universities();
