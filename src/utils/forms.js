import debounceMethod from './debounce';
export function initializeForm(schema, ...keys){
  return buildForm(initValues(keys), schema);
}
export const buildForm = (model, schema) => ({schema,
    values: model,
    errors: {},
    fields: Object.keys(model).map(field => new Field(field, (typeof model[field] === 'boolean') ? 'checkbox' : 'text')),
    form: {submitted: false, loading: false, saving: false}});
export const buildFormModel = (schema, ...initFields) => {
  const model = initValues(...initFields);
  console.log("SCHEMA",schema);
  return buildForm(model, schema);
};
const initValues = (...initFields) => {
  const model = {};
  initFields.forEach(field => {
    switch((typeof field).toLowerCase()){
      case 'string':
        Object.assign(model, {[field]: ''});
        break;
      case 'object':
        Object.assign(model, field);
        break;
    }
  });
  return model;
};
export const buildField = (name, type = null, placeholder = null) => {
  if(!type)
    if(name.toLowerCase().includes('password'))
      type = 'password';
    else
      type = 'text';
  const model = Object.assign({},{name, type});
  if(placeholder)
    Object.assign(model, {placeholder});
  return model;
};
export const hasErrors = (errors) => !!Object.keys(errors).find(field => Array.isArray(errors[field]) && errors[field].length > 0);

export const debounce = debounceMethod;

export class Field{
  constructor(name, type){
    this.name = name;
    this.type = type || 'text';
    this.value = type && type === 'checkbox' ? false : '';
    this.errors = [];
    this.touched = false;
  }
}
