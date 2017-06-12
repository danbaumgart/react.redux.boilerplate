import CONSTRAINT from '../constants/constraints';
import {MaximumConstraints, MinimumConstraints, Restrictions} from '../validation';
import DATA_TYPES from '../../utils/constants/dataTypes';
import CRITERIA from '../constants/criteria';
const ValueUtils = {
    isFalsey(value) {
        return Array.isArray(value) ? value.length === 0 : !Boolean(value);
    }
};
const ValidationUtils = {
    isFalsey(value) {
        return Array.isArray(value) ? value.length === 0 : !Boolean(value);
    },
    hasRequiredError(value, constraints) {
        return constraints[CONSTRAINT.REQUIRED] && isFalsey(value);
    },
    validateRestriction(value, constraints) {
        const criteria = CRITERIA[constraints[CONSTRAINT.RESTRICT]] || null;
        if(criteria) return Restrictions[criteria](value);
    },
    validateField(value, constraints) {
        this.name = name;
        const errors = [];
        if(this.hasRequiredError(value, constraints)) errors.push(CRITERIA.REQUIRED);
        else {

        }
    }
};
class Validate {
    constructor(name, value, constraints){
        this.name = name;
        this.errors = [];
        const {required, restrict, maximum, minimum} = ValidationUtils.deconstructSchema(constraints);
        console.log("REQUIRED", required, "RESTRICT", restrict, "MAXIMUM", maximum, "MINIMUM", minimum);
        if(required && !ValidationUtils.hasRequiredError(value)) {
            this.errors.push(CRITERIA.REQUIRED)
        }
        else {
            if (restrict) {
                if (!Restrictions[restrict](value)) this.errors.push(CONSTRAINT.RESTRICT + ' ' + restrict);
            }
            if (maximum && Object.keys(maximum).length) {
                const criteria = Object.keys(maximum);
                const error = criteria.find(criterion => !MaximumConstraints[criterion](value, maximum[criterion]));
                if (error) this.errors.push(CONSTRAINT.MAXIMUM + ' ' + error);
            }
            if (minimum && Object.keys(minimum).length) {
                const criteria = Object.keys(minimum).forEach(criterion => {
                    const min = minimum[criterion];
                    console.log("MINLENGTH", min);
                    const error = !MinimumConstraints[criterion](value, min);
                    if (error) this.errors.push(CONSTRAINT.MINIMUM + ' ' + error);
                });
            }
        }
    }
    static isValidRequired(value){
        switch(typeof value) {
            case DATA_TYPES.OBJECT:
                if (Array.isArray(value)) return value.length > 0;
                else return Object.keys(value).length > 0;
            default:
                return Boolean(value);
        }
    }
}
export default Validate;
