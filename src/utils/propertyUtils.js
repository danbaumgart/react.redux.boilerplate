const valueKeyPairs = initialObject => Object.keys(initialObject).map(key => ({[initialObject[key]]: key}));
const enumeratedKeys = (initialObject, offset = 1) => {
    const enumerated = {};
    Object.keys(initialObject).forEach((key, index) => {
        const pair = ({[index + offset]: key});
        Object.assign(enumerated, pair);
    });
    return enumerated;
};
const PropertyUtils = {
    invertObjectProperties(initialObject) {
        return Object.assign(...valueKeyPairs(initialObject));
    },
    enumeratePropertyNames(initialObject, offset = 1){
        const enumerated = enumeratedKeys(initialObject, offset);
        console.log("ENUMERATED", enumerated);
        return enumerated;
    }
};
export const {invertObjectProperties, enumeratePropertyNames} = PropertyUtils;
export default PropertyUtils;
