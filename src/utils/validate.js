import * as types from './enums/validation';
const minCharacter = (input, requirement, mincount = 1)=>{
  let matches = [];
  if(input && requirement){
    switch(requirement){
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
      ALPHA: (mincount)=>minCharacter(input,types.ALPHA,mincount),
      NUMERIC: (mincount)=>minCharacter(input,types.NUMERIC,mincount),
      SPECIAL: (mincount)=>minCharacter(input,types.SPECIAL,mincount),
      UPPERCASE: (mincount)=>minCharacter(input,types.UPPERCASE,mincount),
      LOWERCASE: (mincount)=>minCharacter(input,types.LOWERCASE,mincount)
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


const _validateField = (input, schema) => {
  let valid = validate(input);
  let vtypes = types;
  let keys = Object.keys(schema);
  let err = [];
  if (keys) {
    if(keys.find(i=>i.toUpperCase() === vtypes.REQUIRED && !valid.REQUIRED()))
        return [vtypes.REQUIRED];
    else if(input !== '') {
        keys.forEach(key=> {
          let REQUIREMENT = key.toUpperCase();
          switch (REQUIREMENT) {
            case vtypes.MINIMUM:
              Object.keys(schema[key]).forEach(property=> {
                let PROPERTY = property.toUpperCase();
                let arg = schema[key][property];
                switch (PROPERTY) {
                  case vtypes.LENGTH:
                    if (!valid.MINIMUM.LENGTH(arg))
                      err.push([vtypes.MINIMUM, vtypes.LENGTH, arg].join(' '));
                    break;
                  case vtypes.VALUE:
                    if (!valid.MINIMUM.VALUE(arg))
                      err.push([vtypes.MINIMUM, vtypes.VALUE, arg].join(' '));
                    break;
                  default:
                    if (!valid.MINIMUM[PROPERTY](arg))
                      err.push([vtypes.MINIMUM, vtypes[PROPERTY], arg].join(' '));
                    break;
                }
              });
              break;
            case vtypes.MAXIMUM:
              Object.keys(schema[key]).forEach(sub=> {
                let subkey = sub.toUpperCase();
                let arg = schema[key][sub];
                switch (subkey) {
                  case vtypes.LENGTH:
                    if (!valid.MAXIMUM.LENGTH(arg))
                      err.push([vtypes.MAXIMUM, vtypes.LENGTH, arg].join(' '));
                    break;
                  case vtypes.VALUE:
                    if (!valid.MAXIMUM.VALUE(arg))
                      err.push([vtypes.MAXIMUM, vtypes.VALUE, arg].join(' '));
                    break;
                  default:
                    if (!valid.MAXIMUM[subkey](arg))
                      err.push([vtypes.MAXIMUM, vtypes[subkey], arg].join(' '));
                    break;
                }
              });
              break;
            case vtypes.RESTRICT:
              Object.keys(schema[key]).forEach(sub=> {
                let subkey = sub.toUpperCase();
                let arg = schema[key][sub];
                switch (subkey) {
                  case vtypes.VALUE:
                    if (!valid.RESTRICT[subkey](arg))
                      err.push([vtypes.RESTRICT, vtypes[subkey], arg].join(' '));
                    break;
                  default:
                    if (!valid.RESTRICT[subkey](arg))
                      err.push([vtypes.RESTRICT, vtypes[subkey]].join(' '));
                    break;
                }
              });
              break;
            default:
              if (!valid[REQUIREMENT]())
                err.push(REQUIREMENT);
              break;
          }
        });
      }
  }
  return err;
};
class Validator{
  constructor(schema){
    this.schema = schema;
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    
  }
  validateForm(form){
    const errors = {};
    Object.keys(form).forEach(field => {
      errors[field] = this.validateField(field, form[field]);
    });
    return errors;
  }
  validateField(name,value){
    return _validateField(value,this.schema[name]);
  }
}
export default Validator;
