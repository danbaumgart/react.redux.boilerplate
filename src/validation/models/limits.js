import CONSTRAINTS from '../constants/constraints';
import CRITERIA from '../constants/criteria';
import DATA_TYPES from '../../utils/constants/dataTypes';
import {toProperCase} from '../../utils/stringUtils';
import {MaximumConstraints, MinimumConstraints} from '../validation';
import {CHARACTERS, CHARACTER, LIMIT} from '../constants/validation';
const GetLimitType = model => model instanceof Maximum ? CONSTRAINTS.MAXIMUM :
    model instanceof Minimum ? CONSTRAINTS.MINIMUM : LIMIT;
class Limit {
    constructor(criterion, limit, validateFunction) {
        this.criterion = criterion;
        this.limit = limit;
        if(typeof validateFunction === DATA_TYPES.FUNCTION)
            this.isInvalid = input => !validateFunction(input, limit);
        else this.isInvalid = input => false;
    }
    getMessage() {
        const parts = [GetLimitType(this)];
        if(this.criterion === CRITERIA.VALUE) parts.push(CRITERIA.VALUE, this.limit);
        else if(this.criterion === CRITERIA.LENGTH) parts.push(CRITERIA.LENGTH, this.limit, this.limit > 1 ? CHARACTERS : CHARACTER);
        else parts.push(this.limit, CRITERIA[this.criterion], CHARACTERS);
        return toProperCase(...parts);
    }
}
export class Maximum extends Limit {
    constructor(criterion, limit) {
        super(criterion, limit, MaximumConstraints[criterion]);
    }
}
export class Minimum extends Limit {
    constructor(criterion, limit) {
        super(criterion, limit, MinimumConstraints[criterion]);
    }
}
