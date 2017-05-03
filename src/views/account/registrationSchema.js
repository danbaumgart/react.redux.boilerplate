import CONDITIONS from '../../utils/constants/validation';
export default {
    emailAddress: {
        [CONDITIONS.REQUIRED]: true,
        [CONDITIONS.MINIMUM_LENGTH]: 8,
        [CONDITIONS.EMAIL]: true
    },
    password: {
        [CONDITIONS.REQUIRED]: true,
        [CONDITIONS.MINIMUM_LENGTH]: 1,
        [CONDITIONS.MINIMUM_SPECIAL]: 1,
        [CONDITIONS.MINIMUM_UPPERCASE]: 1,
        [CONDITIONS.MINIMUM_NUMERIC]: 1,
        [CONDITIONS.MINIMUM_LOWERCASE]: 1
    },
    firstName: {
        [CONDITIONS.RESTRICT_ALPHA]: true
    },
    lastName: {
        [CONDITIONS.REQUIRED]: true,
        [CONDITIONS.MINIMUM_LENGTH]: 2,
        [CONDITIONS.MAXIMUM_LENGTH]: 6
    }
};
