export function initializeForm(...keys){
  const form = {}, errors = {}, schema = {};
  keys.forEach(key => {
    Object.assign(form, {[key]: ''});
    Object.assign(errors, {[key]: []});
    Object.assign(schema, {[key]: {}});
  });
  return Object.assign({}, {form}, {errors}, {schema});
}
