export function initializeForm(...keys){
  const form = {values: {}, form:{submitted: false, loading: false, saving: false}, errors: {}};
  keys.forEach(key => {
    Object.assign(form.values, {[key]: ''});
  });
  return form;
}
