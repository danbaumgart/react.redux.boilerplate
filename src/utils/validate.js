import types from './enums/validation';
import reformat from './reformat';

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
const messages = (field = null) => {
  if(field)
    field = reformat.properCase(field) + ' ';
  return {
    REQUIRED: (customMessage = null) => customMessage || `Required.`,
    EMAIL: (customMessage = null) => customMessage || `Invalid Email.`,
    NUMBER: (customMessage = null) => customMessage || `Invalid Number.`,
    INTEGER: (customMessage = null) => customMessage || `Invalid Integer.`,
    DATE: (customMessage = null) => customMessage || `Invalid Date.`,
    TIME: (customMessage = null) => customMessage || `Invalid Time.`,
    ALPHA: (customMessage = null) => customMessage || `Requires a Letter/Alpha Character.`,
    NUMERIC: (customMessage = null) => customMessage || `Requires a Numeric Character.`,
    SPECIAL: (customMessage = null) => customMessage || `Requires a Special Character.`,
    UPPERCASE: (customMessage = null) => customMessage || `Requires an Uppercase Letter.`,
    LOWERCASE: (customMessage = null) => customMessage || `Requires a Lowercase Letter.`,
    MINIMUM_LENGTH: (minimum = 1, customMessage = null) => customMessage || `Minimum ${minimum} ${minimum > 1 ? 'Characters' : 'Character'}.`,
    MINIMUM_VALUE: (minimum, customMessage = null) => customMessage || `Minimum ${minimum}.`,
    MINIMUM_ALPHA: (minimum = 1, customMessage = null) => customMessage || `Requires ${minimum} ${minimum > 1 ? 'Letters/Alpha Characters' : 'Letter/Alpha Character'}.`,
    MINIMUM_NUMERIC: (minimum = 1, customMessage = null) => customMessage || `Requires ${minimum} ${minimum > 1 ? 'Numeric Characters' : 'Numeric Character'}.`,
    MINIMUM_SPECIAL: (minimum = 1, customMessage = null) => customMessage || `Requires ${minimum} ${minimum > 1 ? 'Special Characters' : 'Special Character'}.`,
    MINIMUM_UPPERCASE: (minimum = 1, customMessage = null) => customMessage || `Requires ${minimum} ${minimum > 1 ? 'Capital Letters' : 'Capital Letter'}.`,
    MINIMUM_LOWERCASE: (minimum = 1, customMessage = null) => customMessage || `Requires ${minimum} ${minimum > 1 ? 'Lowercase Letters' : 'Lowercase Letter'}.`,
    MAXIMUM_LENGTH: (maximum, customMessage = null) => customMessage || `Maximum Length ${maximum} Characters.`,
    MAXIMUM_VALUE: (maximum, customMessage = null) => customMessage || `Maximum ${maximum}.`,
    RESTRICT_ALPHA: (customMessage = null) => customMessage || `Letters/Alpha Characters Only.`,
    RESTRICT_NUMERIC: (customMessage = null) => customMessage || `Numbers Only.`,
    RESTRICT_ALPHANUMERIC: (customMessage = null) => customMessage || `Alphanumeric Characters Only.`,
    RESTRICT_VALUE: (fieldToCompare = null, customMessage = null) => customMessage || (fieldToCompare ? `Does Not Match ${fieldToCompare}.` : `Does Not Match.`),
    UNAVAILABLE: (customMessage = null) => customMessage || `${field} Belongs to Existing Account.`
  }
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
    RESTRICT_VALUE: (value)=>new RegExp('^' + value + '$').test(input)
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
    this.validateForm = this.validateForm.bind(this);
    this.validateField = this.validateField.bind(this);
    this.getDefaultErrorMessages = this.getDefaultErrorMessages.bind(this);
    this.getAllDefaultErrorMessages = this.getAllDefaultErrorMessages.bind(this);
  }
  getAllDefaultErrorMessages(errors = {}){
    return Object.assign({}, ...Object.keys(errors).map(key => this.getDefaultErrorMessages(key, errors[key])));
  }
  getDefaultErrorMessages(name, errors = []){
    let defaultMessages = messages(name);
    return {[name]: errors.map(e => e.includes("MINIMUM") || e.includes("MAXIMUM")
      ? defaultMessages[e](this.schema[name][e], null)
      : defaultMessages[e]())};
  }
  validateForm(form) {
    const errors = {};
    Object.keys(form).forEach(field => Object.assign(errors, this.validateField(field, form[field])));
    return Object.assign({}, ...Object.keys(errors).filter(key => Array.isArray(errors[key]) && errors[key].length > 0)
      .map(errKey => Object.assign({}, {[errKey]: errors[errKey]})));
  }
  validateField(name, value){
    return Object.assign({}, {[name]: !this.schema[name] ? [] : _validateField(value, this.schema[name])});
  }
}
export default Validator;
