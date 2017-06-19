import LOCATION from '../properties/location';
import SCHEMA from '../properties/schema';
import INPUTS from '../../ui/constants/inputs';
export default {
    [LOCATION.NAME]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
    },
    [LOCATION.STREET]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
    },
    [LOCATION.CITY]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
    },
    [LOCATION.STATE]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
    },
    [LOCATION.ZIP]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
    }
}
