import {ValidationSchema, OptimizedValidationSchema} from './model/validationSchema';
export default {
    toFieldErrors(name, value, schema, optimized = true) {
        const validation = optimized ?
            new OptimizedValidationSchema(schema) :
            new ValidationSchema(schema);
        return {[name]: validation.isInvalid(value) && validation.errors || []};
    },
    toFormErrors(form, schema, optimized = true) {
        const formErrors = Object.keys(form).map(name =>
            this.toFieldErrors(name, form[name], schema[name], optimized));
        console.log("Form errors", formErrors);
        return Object.assign(...formErrors);
    }
};
