import CONTACT from '../properties/contact';
import CRITERIA from '../../validation/constants/criteria';
import SCHEMA from '../properties/schema';
import INPUTS from '../../ui/constants/inputs';
export default {
    [CONTACT.FIRST_NAME]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.ALPHA,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 2},
        [SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 25}
    },
    [CONTACT.LAST_NAME]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.ALPHA,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 2},
        [SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 35}
    },
    [CONTACT.EMAIL_ADDRESS]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.EMAIL,
    },
    [CONTACT.PHONE_NUMBER]: {
        [SCHEMA.INPUT]: INPUTS.PHONE_NUMBER,
        [SCHEMA.REQUIRED]: false,
        [SCHEMA.RESTRICT]: CRITERIA.NUMERIC,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 10}
    },
    [CONTACT.EXTENSION]: {
        [SCHEMA.INPUT]: INPUTS.TEXT_FIELD,
        [SCHEMA.REQUIRED]: false,
        [SCHEMA.RESTRICT]: null
    }
};
