import * as types from './enums/validation';
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

const validate = (input) => {
  input = input || '';
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
    MINIMUM: {
      LENGTH: (minlength)=>input && input.length >= minlength,
      VALUE: (minvalue)=>input && input >= minvalue,
      ALPHA: (mincount)=>minCharacter(input, types.ALPHA, mincount),
      NUMERIC: (mincount)=>minCharacter(input, types.NUMERIC, mincount),
      SPECIAL: (mincount)=>minCharacter(input, types.SPECIAL, mincount),
      UPPERCASE: (mincount)=>minCharacter(input, types.UPPERCASE, mincount),
      LOWERCASE: (mincount)=>minCharacter(input, types.LOWERCASE, mincount)
    },
    MAXIMUM: {
      LENGTH: (maxlength)=>input && input.length <= maxlength,
      VALUE: (maxvalue)=>input && input <= maxvalue
    },
    RESTRICT: {
      ALPHA: ()=>/^[a-zA-Z]+$/.test(input),
      NUMERIC: ()=>/^[\d]+$/.test(input),
      ALPHANUMERIC: ()=>/^[^_\W\s]+$/.test(input),
      VALUE: (value)=>new RegExp('^' + value + '$').test(input)
    }
  }
};
export const evaluate = (input)=> {
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
export const validationTypes = {
  REQUIRED: "REQUIRED",
  EMAIL: "EMAIL",
  NUMBER: "NUMBER",
  INTEGER: "INTEGER",
  DATE: "DATE",
  TIME: "TIME",
  ALPHA: "ALPHA",
  NUMERIC: "NUMBER",
  SPECIAL: "SPECIAL",
  UPPERCASE: "UPPERCASE",
  LOWERCASE: "LOWERCASE",
  MINIMUM_LENGTH: "MINIMUM_LENGTH",
  MINIMUM_VALUE: "MINIMUM_VALUE",
  MINIMUM_ALPHA: "MINIMUM_ALPHA",
  MINIMUM_NUMERIC: "MINIMUM_NUMERIC",
  MINIMUM_SPECIAL: "MINIMUM_SPECIAL",
  MINIMUM_UPPERCASE: "MINIMUM_UPPERCASE",
  MINIMUM_LOWERCASE: "MINIMUM_LOWERCASE",
  MAXIMUM_LENGTH: "MAXIMUM_LENGTH",
  MAXIMUM_VALUE: "MAXIMUM_VALUE",
  RESTRICT_ALPHA: "RESTRICT_ALPHA",
  RESTRICT_NUMERIC: "RESTRICT_NUMERIC",
  RESTRICT_ALPHANUMERIC: "RESTRICT_ALPHANUMERIC",
  RESTRICT_VALUE: "RESTRICT_VALUE"
};
const _validateField = (input, schema) => {
  let valid = evaluate(input);
  let vtypes = validationTypes;
  let keys = Object.keys(schema);
  let err = [];
  if (Array.isArray(keys) && keys.length) {
    if (keys.find(i=>i.toUpperCase() === vtypes.REQUIRED)) {
      if (!valid.REQUIRED()) {
        err.push(vtypes.REQUIRED);
        return err;
      }
    }
    else if (input === '') {
      return err;
    }
    keys.forEach(requirement => {
      if (!valid[requirement](schema[requirement])) {
        err.push(vtypes[requirement]);
      }
    });
  }
  return err;
};
class Validator {
  constructor(schema) {
    this.schema = schema;
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.requiredKeys = this.requiredKeys.bind(this);
    
  }
  
  validateForm(form) {
    const errors = {};
    let requiredKeys = this.requiredKeys(form);
    if(Array.isArray(requiredKeys) && requiredKeys.length)
      
    Object.keys(form).forEach(field => {
      let fieldValidation = this.validateField(field, form[field]);
      if (fieldValidation && fieldValidation.length)
        Object.assign(errors, {[field]: fieldValidation});
    });
    return errors;
  }
  
  validateField(name, value) {
    let fieldSchema = this.schema[name];
    if (fieldSchema)
      return _validateField(value, this.schema[name]);
    return null;
  }
  requiredKeys(){
    return Object.keys(this.schema).filter(key => this.schema[key][validationTypes.REQUIRED]);
  }
}
export default Validator;
