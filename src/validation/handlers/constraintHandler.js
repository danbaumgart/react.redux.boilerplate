import CRITERIA from '../constants/criteria';
import CONSTRAINTS from '../constants/constraints';
import CHARACTERS from '../../utils/constants/characters';
const concatenateConstraintType = (constraint, criteria) => [constraint, CRITERIA[criteria]]
    .map(word => word.toUpperCase())
    .join(CHARACTERS.UNDERSCORE);
const _MAXIMUM = criteria => concatenateConstraintType(CONSTRAINTS.MAXIMUM, criteria);
const _MINIMUM = criteria => concatenateConstraintType(CONSTRAINTS.MINIMUM, criteria);
const _RESTRICTION = criteria => {
    return concatenateConstraintType(CONSTRAINTS.RESTRICT, criteria);
};
export default {
    [CONSTRAINTS.MINIMUM]: {
        [CRITERIA.LENGTH]: _MINIMUM(CRITERIA.LENGTH),
        [CRITERIA.VALUE]: _MINIMUM(CRITERIA.VALUE),
        [CRITERIA.ALPHA]: _MINIMUM(CRITERIA.ALPHA),
        [CRITERIA.NUMERIC]: _MINIMUM(CRITERIA.NUMERIC),
        [CRITERIA.ALPHANUMERIC]: _MINIMUM(CRITERIA.ALPHANUMERIC),
        [CRITERIA.SPECIAL]: _MINIMUM(CRITERIA.SPECIAL),
        [CRITERIA.UPPERCASE]: _MINIMUM(CRITERIA.UPPERCASE),
        [CRITERIA.LOWERCASE]: _MINIMUM(CRITERIA.LOWERCASE)
    },
    [CONSTRAINTS.MAXIMUM]: {
        [CRITERIA.LENGTH]: _MAXIMUM(CRITERIA.LENGTH),
        [CRITERIA.VALUE]: _MAXIMUM(CRITERIA.VALUE)
    },
    [CONSTRAINTS.RESTRICT]: {
        [CRITERIA.ALPHA]: _RESTRICTION(CRITERIA.ALPHA),
        [CRITERIA.NUMERIC]: _RESTRICTION(CRITERIA.NUMERIC),
        [CRITERIA.ALPHANUMERIC]: _RESTRICTION(CRITERIA.ALPHANUMERIC),
        [CRITERIA.VALUE]: _RESTRICTION(CRITERIA.VALUE),
        [CRITERIA.EMAIL]: _RESTRICTION(CRITERIA.EMAIL),
        [CRITERIA.PHONE]: _RESTRICTION(CRITERIA.PHONE)
    }
};
