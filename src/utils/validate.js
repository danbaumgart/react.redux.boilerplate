import CONDITIONS from './constants/validation';

const minCharacter = (input, requirement, mincount = 1)=> {
  let matches = [];
  if (input && requirement) {
    switch (requirement) {
      case CONDITIONS.ALPHA:
        matches = input.match(/[A-Za-z]/g) || [];
        break;
      case CONDITIONS.UPPERCASE:
        matches = input.match(/[A-Z]/g) || [];
        break;
      case CONDITIONS.LOWERCASE:
        matches = input.match(/[a-z]/g) || [];
        break;
      case CONDITIONS.NUMERIC:
        matches = input.match(/[\d]/g) || [];
        break;
      case CONDITIONS.SPECIAL:
        matches = input.match(/([^\w\s]|_)/g) || [];
        break;
    }
  }
  return matches.length >= mincount;
};

const evaluate = (input)=> {
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
    MINIMUM_ALPHA: (mincount)=>minCharacter(input, CONDITIONS.ALPHA, mincount),
    MINIMUM_NUMERIC: (mincount)=>minCharacter(input, CONDITIONS.NUMERIC, mincount),
    MINIMUM_SPECIAL: (mincount)=>minCharacter(input, CONDITIONS.SPECIAL, mincount),
    MINIMUM_UPPERCASE: (mincount)=>minCharacter(input, CONDITIONS.UPPERCASE, mincount),
    MINIMUM_LOWERCASE: (mincount)=>minCharacter(input, CONDITIONS.LOWERCASE, mincount),
    MAXIMUM_LENGTH: (maxlength)=>input && input.length <= maxlength,
    MAXIMUM_VALUE: (maxvalue)=>input && input <= maxvalue,
    RESTRICT_ALPHA: ()=>/^[a-zA-Z]+$/.test(input),
    RESTRICT_NUMERIC: ()=>/^[\d]+$/.test(input),
    RESTRICT_ALPHANUMERIC: ()=>/^[^_\W\s]+$/.test(input),
    RESTRICT_VALUE: (value)=>new RegExp('^' + value + '$').test(input),
    UNAVAILABLE: (callback)=>Promise.resolve(callback(input))
  };
};

const _validateField = (input = '', schema) => {
  let valid = evaluate(input);
  let keys = Object.keys(schema);
  let err = [];
  if (Array.isArray(keys) && keys.length) {
    if (keys.findIndex(i => i === CONDITIONS.REQUIRED) > -1)
      if (!valid.REQUIRED())
        return [CONDITIONS.REQUIRED];
    else if (!input || input == '')
        return [];
    keys.forEach(requirement => {
      if (!valid[requirement](schema[requirement]))
        err.push(CONDITIONS[requirement]);
    });
  } return err;
};

class Validator {
  constructor(schema, asyncValidation) {
    this.schema = schema;
    this.hasAsyncValidation = Boolean(asyncValidation);
    this.asyncValidation = asyncValidation;
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  validateForm(form) {
    const errors = {};
    console.log("FORM", form);
    Object.keys(form).forEach(field => {
        const fieldErrors = this.validateField(field, form[field]);
        console.log("FIELD ERRORS", fieldErrors);
        Object.assign(errors, {[field]: fieldErrors});
    });
    return errors;
  }
  validateField(name, value) {
    if (this.schema[name])
      return _validateField(value, this.schema[name]);
    return [];
  }
}
export default Validator;
