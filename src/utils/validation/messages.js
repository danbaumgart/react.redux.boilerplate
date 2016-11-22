import restructure from '../restructure';
export default (field = null) => {
  if(field)
    field = restructure.string.properCase(field);
  return {
    REQUIRED: (customMessage = null) => customMessage || `${field} Required.`,
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
    UNAVAILABLE: (customMessage = null) => customMessage || `Account ${field} Exists.`
  };
};
