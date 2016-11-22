export default (input)=> {
  //A CALL THAT RETURNS TRUE MEANS THAT THE INPUT VALUE IS VALID WITH RESPECT TO THAT PARTICULAR CONDITION.
  return {
    REQUIRED: ()=> input && input !== '',
    EMAIL: ()=> /^([\w.-]+[^\W])(@[\w.-]+)(\.[^\W_]+)$/.test(input),
    NUMBER: ()=> !Number.isNaN(Number(input)),
    INTEGER: ()=> input % 1 === 0,
    DATE: ()=> /^(0?\d|1[0-2])\/(0?\d|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(input),
    TIME: ()=> /^(0?[1-9]|1[0-2])(\s?:\s?)([0-5]\d)(\s?[pPaA][mM])$/.test(input),
    ALPHA: ()=> /[a-zA-Z]/.test(input),
    NUMERIC: ()=> /[\d]/.test(input),
    SPECIAL: ()=> /([^\w\s]|_)/.test(input),
    UPPERCASE: ()=> /[A-Z]/.test(input),
    LOWERCASE: ()=> /[a-z]/.test(input),
    MINIMUM_LENGTH: (minlength)=> input && input.length >= minlength,
    MINIMUM_VALUE: (minvalue)=> input && input >= minvalue,
    MINIMUM_ALPHA: (mincount)=> (input.match(/[a-zA-Z]/g) || []).length >= mincount,
    MINIMUM_NUMERIC: (mincount)=> (input.match(/[\d]/g) || []).length >= mincount,
    MINIMUM_SPECIAL: (mincount)=> (input.match(/([^\w\s]|_)/g) || []).length >= mincount,
    MINIMUM_UPPERCASE: (mincount)=> (input.match(/[A-Z]/g) || []).length >= mincount,
    MINIMUM_LOWERCASE: (mincount)=> (input.match(/[a-z]/g) || []).length >= mincount,
    MAXIMUM_LENGTH: (maxlength)=> input && input.length <= maxlength,
    MAXIMUM_VALUE: (maxvalue)=> input && input <= maxvalue,
    RESTRICT_ALPHA: ()=> /^[a-zA-Z]+$/.test(input),
    RESTRICT_NUMERIC: ()=> /^[\d]+$/.test(input),
    RESTRICT_ALPHANUMERIC: ()=> /^[^_\W\s]+$/.test(input),
    RESTRICT_VALUE: (value)=> new RegExp('^' + value + '$').test(input)
  };
};
