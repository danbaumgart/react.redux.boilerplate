import types from '../enums/validation';
import messages from './validation/messages';
import validators from './validation/validators';

class Validator {
  constructor(schema, ...asyncFields) {
    this.schema = schema;
    this.asyncronousFields = asyncFields;
    this.validateForm = this.validateForm.bind(this);
    this.validateField = this.validateField.bind(this);
    this.getDefaultErrorMessages = this.getDefaultErrorMessages.bind(this);
    this.getAllDefaultErrorMessages = this.getAllDefaultErrorMessages.bind(this);
    this.hasAsyncronousValidation = this.hasAsyncronousValidation.bind(this);
  }
  static fieldValidation(input = '', schema = {}){
    let valid = validators(input);
    const isOptional = Object.keys(schema).findIndex(i => i === types.REQUIRED) === -1;
    let err = [];
    if (isOptional && !valid.REQUIRED())
      err = [];
    else if(!isOptional && !valid.REQUIRED())
      err =[types.REQUIRED];
    else
      Object.keys(schema).forEach(condition => !valid[condition](schema[condition]) && err.push(types[condition]));
    return err;
  }
  hasAsyncronousValidation({name}){
    return this.asyncronousFields.find(field => field.toLowerCase() === name.toLowerCase())
  }
  getAllDefaultErrorMessages({errors, includeField = true}){
    return Object.assign({}, ...Object.keys(errors).map(name => this.getDefaultErrorMessages({name: name, errors: errors[name], includeField})));
  }
  getDefaultErrorMessages({name, errors = [], includeField}){
    let defaultMessages = messages(includeField ? {name} : null);
    return {[name]: errors.map(e => e.includes("MINIMUM") || e.includes("MAXIMUM")
      ? defaultMessages[e](this.schema[name][e], null)
      : defaultMessages[e]())};
  }
  validateForm(form) {
    const errors = {};
    Object.keys(form).forEach(field => Object.assign(errors, {[field]: this.validateField(field, form[field])}));
    return Object.assign({}, ...Object.keys(errors)
      .filter(key => Array.isArray(errors[key]) && errors[key].length > 0)
      .map(errKey => Object.assign({[errKey]: errors[errKey]})));
  }
  validateField(name, value){
    return Validator.fieldValidation(value, this.schema[name]);
  }
}
export default Validator;
