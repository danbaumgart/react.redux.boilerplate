import CRITERIA from '../../validation/constants/criteria';
import METADATA from '../../regexp/constants/metadata';
import CONTACT from './constants/contactProperties';
import SCHEMA from './constants/schemaProperties';
export default {
    [CONTACT.FIRST_NAME]: {
        [SCHEMA.TYPE]: METADATA.TEXT.STRING,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.ALPHA,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 2},
        [SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 25}
    },
    [CONTACT.LAST_NAME]: {
        [SCHEMA.TYPE]: METADATA.TEXT.STRING,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.ALPHA,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 2},
        [SCHEMA.MAXIMUM]: {[CRITERIA.LENGTH]: 35}
    },
    [CONTACT.EMAIL_ADDRESS]: {
        [SCHEMA.TYPE]: METADATA.TEXT.EMAIL,
        [SCHEMA.REQUIRED]: true,
        [SCHEMA.RESTRICT]: CRITERIA.EMAIL,
    },
    [CONTACT.PHONE_NUMBER]: {
        [SCHEMA.TYPE]: METADATA.TEXT.PHONE,
        [SCHEMA.REQUIRED]: false,
        [SCHEMA.RESTRICT]: CRITERIA.NUMERIC,
        [SCHEMA.MINIMUM]: {[CRITERIA.LENGTH]: 10}
    },
    [CONTACT.EXTENSION]: {
        [SCHEMA.TYPE]: METADATA.TEXT.NUMBER,
        [SCHEMA.REQUIRED]: false,
        [SCHEMA.RESTRICT]: null
    }
};
