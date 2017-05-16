import TrinitaWellness from './trinitaWellness';
import {CONFIRMATIONS} from './constants/apiResources';
class Confirmations extends TrinitaWellness {
    constructor() {
        super(CONFIRMATIONS);
    }
}
export default new Confirmations();
