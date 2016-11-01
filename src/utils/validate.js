import types from './enums/validation';

const minCharacter = (input, requirement, mincount = 1)=> {
  let matches = [];
  if (input && requirement) {
    switch (requirement) {
      case types.ALPHA:
        matches = input.match(/[A-Za-z]/g) || [];
        break;
      case types.UPPERCASE:
        matches = input.match(/[A-Z]/g) || [];
        break;
      case types.LOWERCASE:
        matches = input.match(/[a-z]/g) || [];
        break;
      case types.NUMERIC:
        matches = input.match(/[\d]/g) || [];
        break;
      case types.SPECIAL:
        matches = input.match(/([^\w\s]|_)/g) || [];
        break;
    }
  }
  return matches.length >= mincount;
};

const evaluate = (input)=> {
  //A CALL THAT RETURNS TRUE MEANS THAT THE INPUT VALUE IS VALID WITH RESPECT TO THAT PARTICULAR CONDITION.
  return {
    REQUIRED: ()=> input && input !== '',
    EMAIL: ()=>/^([\w.-]+[^\W])(@[\w.-]+)(\.[^\W_]+)$/.test(input),
    NUMBER: ()=>!Number.isNaN(Number(input)),
    INTEGER: ()=>input % 1 === 0,
    DATE: ()=>/^(0?\d|1[0-2])\/(0?\d|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(input),
    TIME: ()=>/^(0?[1-9]|1[0-2])(\s?:\s?)([0-5]\d)(\s?[pPaA][mM])$/.test(input),
    ALPHA: ()=>/[a-zA-Z]/.test(input),
    NUMERIC: ()=>/[\d]/.test(input),
    SPECIAL: ()=>/([^\w\s]|_)/.test(input),
    UPPERCASE: ()=>/[A-Z]/.test(input),
    LOWERCASE: ()=>/[a-z]/.test(input),
    MINIMUM_LENGTH: (minlength)=>input && input.length >= minlength,
    MINIMUM_VALUE: (minvalue)=>input && input >= minvalue,
    MINIMUM_ALPHA: (mincount)=>minCharacter(input, types.ALPHA, mincount),
    MINIMUM_NUMERIC: (mincount)=>minCharacter(input, types.NUMERIC, mincount),
    MINIMUM_SPECIAL: (mincount)=>minCharacter(input, types.SPECIAL, mincount),
    MINIMUM_UPPERCASE: (mincount)=>minCharacter(input, types.UPPERCASE, mincount),
    MINIMUM_LOWERCASE: (mincount)=>minCharacter(input, types.LOWERCASE, mincount),
    MAXIMUM_LENGTH: (maxlength)=>input && input.length <= maxlength,
    MAXIMUM_VALUE: (maxvalue)=>input && input <= maxvalue,
    RESTRICT_ALPHA: ()=>/^[a-zA-Z]+$/.test(input),
    RESTRICT_NUMERIC: ()=>/^[\d]+$/.test(input),
    RESTRICT_ALPHANUMERIC: ()=>/^[^_\W\s]+$/.test(input),
    RESTRICT_VALUE: (value)=>new RegExp('^' + value + '$').test(input),
    UNAVAILABLE: (callback)=>Promise.resolve(callback(input))
  };
};

const _validateField = (input = '', schema = {}) => {
  let valid = evaluate(input);
  const isOptional = Object.keys(schema).findIndex(i => i === types.REQUIRED) === -1;
  let err = [];
  if (isOptional && !valid.REQUIRED())
    err = [];
  else if(!isOptional && !valid.REQUIRED())
    err =[types.REQUIRED];
  else
    Object.keys(schema).forEach(condition => !valid[condition](schema[condition]) && err.push(types[condition]));
  return err;
};

class Validator {
  constructor(schema) {
    this.schema = schema;
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  validateForm(form) {
    const errors = {};
    Object.keys(form).forEach(field => Object.assign(errors, {[field]: this.validateField(field, form[field])}));
    return errors;
  }
  validateField(name, value) {
    if (this.schema[name])
      return _validateField(value, this.schema[name]);
    return [];
  }
}
export default Validator;
