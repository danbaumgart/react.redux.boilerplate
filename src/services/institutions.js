import TrinitaWellness from './trinitaWellness';
import {INSTITUTIONS} from './constants/apiResources';
class Institutions extends TrinitaWellness {
    constructor() {
        super(INSTITUTIONS);
    }
}
export default new Institutions();
