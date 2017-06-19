import APPOINTMENT from '../properties/appointment';
import CRITERIA from '../../validation/constants/criteria';
import SCHEMA from '../properties/schema';
import INPUTS from '../../ui/constants/inputs';
export default {
    [APPOINTMENT.TIME]: {
        [SCHEMA.INPUT]: INPUTS.TIME_PICKER,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.TIME
    },
    [APPOINTMENT.DATE]: {
        [SCHEMA.INPUT]: INPUTS.DATE_PICKER,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.DATE
    },
    [APPOINTMENT.DETAILS]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_AREA,
        [SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 25}
    },
    [APPOINTMENT.FLEXIBLE]: {
        [SCHEMA.INPUT]: INPUTS.CHECKBOX
    }
};
