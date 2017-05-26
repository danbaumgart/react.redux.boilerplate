import {REQUIRED, MINIMUM_LENGTH, RESTRICT_ALPHA} from '../../utils/constants/validation';
import {TEXT_FIELD} from '../../ui/constants/inputTypes';
export default {
    phoneNumber: {
        type: TEXT_FIELD,
        criteria: {
            [REQUIRED]: true,
            [RESTRICT_ALPHA]: true
        }
    },
    extension: {
        type: TEXT_FIELD,
        criteria: {
            [REQUIRED]: true,
            [RESTRICT_ALPHA]: true,
            [MINIMUM_LENGTH]: 2
        }
    }
};
