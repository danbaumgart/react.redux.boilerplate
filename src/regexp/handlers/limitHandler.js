import {Minimum, Maximum} from '../../validation/models/limits';
import CONSTRAINTS from '../../validation/constants/constraints';
export default {
    [CONSTRAINTS.MAXIMUM]: Maximum,
    [CONSTRAINTS.MINIMUM]: Minimum
};
