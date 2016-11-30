export function initializeForm(schema, ...keys){
  return buildForm({model: Object.assign({}, ...keys.map(key => Object.assign({[key]:''}))), schema});
}
export const buildForm = ({model, schema}) => Object.assign({}, {
  values: model
}, {
  fields: Object.keys(model)
    .map(field => buildField({
      name: field,
      type: (model[field] === false || model[field] === true)
        ? 'checkbox'
        : null
    }))
}, {
  form: {
    submitted: false,
    loading: false,
    saving: false
  }
}, {
  errors: {}
}, {
  schema
});
export const buildField = ({name, type = null, placeholder = null}) => {
  if(!type)
    if(name.toLowerCase().includes('password'))
      type = 'password';
    // else if(name.toLowerCase().includes('email'))
    //   type = 'email';
    else
      type = 'text';
  const model = Object.assign({},{name, type});
  if(placeholder)
    Object.assign(model, {placeholder});
  return model;
};
export const hasErrors = (errors) => Object.keys(errors)
  .filter(field => Array.isArray(errors[field]) && errors[field].length > 0)
  .length > 0;

export const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}
