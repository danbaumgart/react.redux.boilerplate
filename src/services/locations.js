import TrinitaWellness from './trinitaWellness';
import {LOCATIONS} from './constants/apiResources';
class Locations extends TrinitaWellness {
    constructor() {
        super(LOCATIONS);
    }
}
export default new Locations();
