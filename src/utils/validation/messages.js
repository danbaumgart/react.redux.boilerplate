import restructure from '../restructure';
export default ({name = null}) => {
  name = name ? restructure.string.properCase(name) + ' ' : name;
  return {
    REQUIRED: () => name !=='' ?`${name}required.` : `required field.`,
    EMAIL: () => `${name}must be a valid email.`,
    NUMBER: () => `${name}must be a valid number.`,
    INTEGER: () => `${name}must be a valid integer.`,
    DATE: () => `${name}must be a valid date.`,
    TIME: () => `${name}must be a valid time.`,
    ALPHA: () => `${name}requires a letter/alphabetic character.`,
    NUMERIC: () => `${name}requires a numeric character.`,
    SPECIAL: () => `${name}requires a special character.`,
    UPPERCASE: () => `${name}requires a capital letter.`,
    LOWERCASE: () => `${name}requires a lowercase letter.`,
    MINIMUM_LENGTH: (minimum) => `${name}minimum length ${minimum} ${minimum > 1 ? 'characters' : 'character'}.`,
    MINIMUM_VALUE: (minimum) => `${name}minimum value ${minimum}`,
    MINIMUM_ALPHA: (minimum = 1) => `${name}requires ${minimum} letter/alphabetic ${minimum !== 1 ? 'characters' : 'character'}.`,
    MINIMUM_NUMERIC: (minimum = 1) => `${name}requires ${minimum} numeric ${minimum !== 1 ? 'characters' : 'character'}.`,
    MINIMUM_SPECIAL: (minimum = 1) => `${name}requires ${minimum} special ${minimum !== 1 ? 'characters' : 'character'}.`,
    MINIMUM_UPPERCASE: (minimum = 1) => `${name}requires ${minimum} capital ${minimum !== 1 ? 'letters' : 'letter'}.`,
    MINIMUM_LOWERCASE: (minimum = 1) => `${name}requires ${minimum} lowercase ${minimum !== 1 ? 'letters' : 'letter'}.`,
    MAXIMUM_LENGTH: (maximum) => `${name}maximum length ${maximum + maximum !== 1 ? 'characters' : 'character'}.`,
    MAXIMUM_VALUE: (maximum) => `${name}maximum value ${maximum}`,
    RESTRICT_ALPHA: () => `${name}cannot contain numbers or symbols`,
    RESTRICT_NUMERIC: () => `${name}must be a numeric value`,
    RESTRICT_ALPHANUMERIC: () => `${name}must be alphanumeric`,
    RESTRICT_VALUE: (fieldToCompare = null) => `${name}does not match${fieldToCompare || ''}.`,
    UNAVAILABLE: () => `${name !== '' ? name : 'value '}exists. must be unique.`
  };
};
