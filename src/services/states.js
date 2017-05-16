import TrinitaWellness from './trinitaWellness';
import {STATES} from './constants/apiResources';
class States extends TrinitaWellness {
    constructor() {
        super(STATES);
    }
}
export default new States();
