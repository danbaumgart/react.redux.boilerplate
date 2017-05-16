import TrinitaWellness from './trinitaWellness';
import {COUNTRIES} from './constants/apiResources';
class Countries extends TrinitaWellness {
    constructor() {
        super(COUNTRIES);
    }
}
export default new Countries();
