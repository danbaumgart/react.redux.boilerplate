import SchemaModel from './schema';
export class ValidationSchema extends SchemaModel {
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
export class OptimizedValidationSchema extends SchemaModel {
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
