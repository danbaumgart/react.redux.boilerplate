import CONSTRAINTS from '../../../validation/constants/constraints';
import TYPES from '../../../regexp/constants/metadata';
import Metadata from './metadata';
import {Restrictions} from '../../../validation/validation';
import {Maximum, Minimum} from '../../../validation/models/limits';
import {toProperCase} from '../../../utils/stringUtils';
import ErrorMessageHandler from '../../../validation/handlers/errorMessageHandler';
import CRITERIA from '../../../validation/constants/criteria';
class Schema extends Metadata {
    constructor({name, type, ...constraints}) {
        super({name, type});
        this.required = constraints.hasOwnProperty(CONSTRAINTS.REQUIRED) && constraints[CONSTRAINTS.REQUIRED] === true;
        this.restrict = constraints.hasOwnProperty(CONSTRAINTS.RESTRICT) ? constraints[CONSTRAINTS.RESTRICT] : null;
        this.maximum = constraints.hasOwnProperty(CONSTRAINTS.MAXIMUM) ? constraints[CONSTRAINTS.MAXIMUM] : null;
        this.minimum = constraints.hasOwnProperty(CONSTRAINTS.MINIMUM) ? constraints[CONSTRAINTS.MINIMUM] : null;
        this.errors = [];
    }
    hasFalseyValue(value) {
        return TYPES.MULTISELECT[this.type] ? !Array.isArray(value) || value.length < 1 : !Boolean(value);
    }
    isInvalidRequired(value) {
        const isInvalid = this.required && this.hasFalseyValue(value);
        if(isInvalid) this.errors.push(ErrorMessageHandler[CONSTRAINTS.REQUIRED]);
        return isInvalid;
    }
    isInvalidRestriction(value) {

        const isInvalid = this.restrict && !Restrictions[CRITERIA[this.restrict]](value);
        if(isInvalid) this.errors.push(ErrorMessageHandler[this.restrict] || toProperCase(CONSTRAINTS.RESTRICT, this.restrict));
        return isInvalid;
    }
    isInvalidMaximum(value) {
        return this.maximum && Object.keys(this.maximum).some(criterion => {
            const maximumLimit = new Maximum(criterion, this.maximum[criterion]);
            const isInvalid = maximumLimit.isInvalid(value);
            if(isInvalid) this.errors.push(maximumLimit.getMessage());
            return isInvalid;
        });
    }
    isInvalidMinimum(value) {
        return this.minimum && Object.keys(this.minimum).some(criterion => {
            const minimumLimit = new Minimum(criterion, this.minimum[criterion]);
            const isInvalid = minimumLimit.isInvalid(value);
            if(isInvalid) this.errors.push(minimumLimit.getMessage());
            return isInvalid;
        });
    }
    isInvalid(value) {
        return this.isInvalidRequired(value) ||
            this.isInvalidRestriction(value) ||
            this.isInvalidMaximum(value) ||
            this.isInvalidMinimum(value);
    }
}
export class Validator extends Schema {
    constructor(schema){
        super(schema);
    }
    isInvalid(value) {
        const isInvalidRequired = this.isInvalidRequired(value);
        const isInvalidRestriction = this.isInvalidRestriction(value);
        const isInvalidMaximum = this.isInvalidMaximum(value);
        const isInvalidMinimum = this.isInvalidMinimum(value);
        return isInvalidRequired || isInvalidRestriction || isInvalidMaximum || isInvalidMinimum;
    }
}
export class OptimizedValidator extends Schema {
    constructor(schema){
        super(schema);
    }
    isInvalid(value) {
        return this.hasFalseyValue(value) && !this.required ? false :
            this.isInvalidRequired(value) ||
            this.isInvalidRestriction(value) ||
            this.isInvalidMaximum(value) ||
            this.isInvalidMinimum(value);
    }
}
