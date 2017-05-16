import TrinitaWellness from './trinitaWellness';
import {APPOINTMENTS} from './constants/apiResources';
class Appointments extends TrinitaWellness {
    constructor() {
        super(APPOINTMENTS);
    }
}
export default new Appointments();
