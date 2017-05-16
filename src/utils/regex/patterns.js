import REGEX from '../constants/regex';
const PATTERNS = {
    UPPERCASE: '[A-Z]',
    LOWERCASE: '[a-z]',
    INTEGER: '[0-9]',
    WHITESPACE: '\\s',
    WORD: '\\w',
    BOUNDARY: '\\b',
    DIGIT: '\\d',
    NOT_WHITESPACE: '\\S',
    NOT_WORD: '\\W',
    NOT_DIGIT: '\\D',
    NOT_BOUNDARY: '\\B'
};
export const {
    UPPERCASE, LOWERCASE, INTEGER,
    WHITESPACE, WORD, DIGIT, BOUNDARY,
    NOT_WHITESPACE, NOT_WORD, NOT_DIGIT, NOT_BOUNDARY} = PATTERNS;
export default PATTERNS;
