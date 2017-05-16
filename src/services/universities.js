import TrinitaWellness from './trinitaWellness';
import {UNIVERSITIES} from './constants/apiResources';
import {DETAILS} from './constants/endpoints/universitiesApi';
class Universities extends TrinitaWellness {
    constructor() {
        super(UNIVERSITIES);
    }
    GetByName(name) {
        return super.Get(null, {name}).then(result => result.content);
    }
    GetDetailsByName(name) {
        return super.Get(DETAILS, {name}).then(result => result.content);
    }
}
export default new Universities();
