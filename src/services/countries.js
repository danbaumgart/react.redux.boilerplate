import TrinitaWellness from './trinitaWellness';
import {toQueryParameters} from '../http/utils/httpUtils';
import {COUNTRIES} from './constants/apiResources';
class Countries extends TrinitaWellness {
    constructor() {
        super(COUNTRIES);
    }
    Search(name) {
        return super.Get(null, toQueryParameters({name}));
    }
}
export default new Countries();
