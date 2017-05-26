import TrinitaWellness from './trinitaWellness';
import {APPOINTMENT_LOCATIONS} from './constants/apiResources';
class AppointmentLocations extends TrinitaWellness {
    constructor() {
        super(APPOINTMENT_LOCATIONS);
    }
}
export default new AppointmentLocations();
