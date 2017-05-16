export default {
    toValidationSchema(schema) {
        return Object.keys(schema).map(field => ({[field]: schema[field].criteria}));
    }
};
