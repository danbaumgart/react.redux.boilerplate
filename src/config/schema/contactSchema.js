import {REQUIRED, MINIMUM_LENGTH, RESTRICT_ALPHA} from '../../utils/constants/validation';
import {TEXT_FIELD} from '../../ui/constants/inputTypes';
const schema = {
    firstName: {
        type: TEXT_FIELD,
        criteria: {
            [REQUIRED]: true,
            [RESTRICT_ALPHA]: true
        }
    },
    lastName: {
        type: TEXT_FIELD,
        criteria: {
            [REQUIRED]: true,
            [RESTRICT_ALPHA]: true,
            [MINIMUM_LENGTH]: 2
        }
    }
};
