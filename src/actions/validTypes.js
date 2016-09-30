export const REQUIRED = 'REQUIRED';
export const EMAIL = 'EMAIL';
export const NUMBER = 'NUMBER';
export const INTEGER = 'INTEGER';
export const DATE = 'DATE';
export const TIME = 'TIME';
export const ALPHA = 'ALPHA';
export const NUMERIC = 'NUMERIC';
export const ALPHANUMERIC = 'ALPHANUMERIC';
export const SPECIAL = 'SPECIAL';
export const UPPERCASE = 'UPPERCASE';
export const LOWERCASE = 'LOWERCASE';
export const MAXIMUM = 'MAXIMUM';
export const MINIMUM = 'MINIMUM';
export const RESTRICT = 'RESTRICT';

export const Validator = (input) => {
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
      VALUE: (minvalue)=>input && input >= minvalue
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

// export class Validator {
//
//   constructor(input) {
//     this._input = input;
//
//   }
//   validate = validation(this._input);
// }
