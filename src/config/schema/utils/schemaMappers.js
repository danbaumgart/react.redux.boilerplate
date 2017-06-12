import {Validator, OptimizedValidator} from '../../../validation/models/schema';
export default {
    toValidationSchema(schema) {
        return Object.keys(schema).map(field => ({[field]: schema[field].criteria}));
    },
    toSchemaModel(rawSchema) {
        return Object.keys(rawSchema).map(name => new OptimizedValidator({name, ...rawSchema[name]}));
    },
    toErrorInfo(fieldErrors) {
        return Object.assign(...fieldErrors);
    }
};
