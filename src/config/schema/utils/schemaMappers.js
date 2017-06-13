import {Validator, OptimizedValidator} from '../../../validation/models/schema';
export default {
    toValidationSchema(schema) {
        return Object.keys(schema).map(field => ({[field]: schema[field].criteria}));
    },
    toSchemaModelList(rawSchema) {
        return Object.keys(rawSchema).map(name => new OptimizedValidator({name, ...rawSchema[name]}));
    },
    toSchemaModel(schemaModelList) {
        return Object.assign(...schemaModelList.map(validator => ({[validator.name]: validator})));
    },
    toErrorInfo(fieldErrors) {
        return Object.assign(...fieldErrors);
    },
    toErrorInfoModel(schema, fields) {
        const schemaModelList = this.toSchemaModelList(schema);
        const schemaModel = this.toSchemaModel(schemaModelList);
        const errors = Object.keys(fields).map(field => ({
            [field]: schemaModel[field] && schemaModel[field].isInvalid(fields[field]) ? schemaModel[field].errors : []
        }));
        return this.toErrorInfo(errors);
    }
};
