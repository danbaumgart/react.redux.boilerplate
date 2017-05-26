import PATTERNS from '../constants/regexPatterns';
import {GLOBAL} from '../constants/regexOptions';
import OptionHandler from '../regex/options';
const PatternHandler = {
    [PATTERNS.UPPERCASE]: /[A-Z]/,
    [PATTERNS.LOWERCASE]: /[a-z]/,
    [PATTERNS.INTEGER]: /[0-9]/,
    [PATTERNS.WHITESPACE]: /\\s/,
    [PATTERNS.WORD]: /\\w/,
    [PATTERNS.BOUNDARY]: /\\b/,
    [PATTERNS.DIGIT]: /\\d/,
    [PATTERNS.NOT_WHITESPACE]: /\\S/,
    [PATTERNS.NOT_WORD]: /\\W/,
    [PATTERNS.NOT_DIGIT]: /\\D/,
    [PATTERNS.NOT_BOUNDARY]: /\\B/,
    [PATTERNS.TELEPHONE_MASK]: /[\\s)(-]/,
    [PATTERNS.EXTENSION_MASK]: /[Ext\\.\\s]/
};
export default Object.assign(...Object.keys(PatternHandler)
    .map(PATTERN => ({[PATTERN]: new RegExp(PatternHandler[PATTERN], OptionHandler[GLOBAL])}))
);
