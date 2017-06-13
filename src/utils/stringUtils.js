import PatternHandler from './regex/patterns';
import {WHITESPACE, UPPERCASE} from './constants/regexPatterns';
import {TRAILING, LEADING} from './constants/regexSymbols';
import SymbolHandler from './regex/symbols';
import {GLOBAL, IGNORE_CASE} from './constants/regexOptions';
import OptionHandler from './regex/options';
import CHARACTERS from './constants/characters';
export const patternMatches = (input, expression) => input.match(new RegExp(expression, GLOBAL)) || [];
export const formatRegex = expression => {
    return expression.includes(' ') ?
        expression.split(' ').join(PatternHandler[WHITESPACE]) :
        expression;
};
export const toProperCase = (...values) => {
    const words = values.map(value => String(value));
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(CHARACTERS.WHITESPACE);
};
export const getMatchIndices = (pattern, source) => {
    const result = [];
    const regex = new RegExp(pattern, OptionHandler[GLOBAL] + OptionHandler[IGNORE_CASE]);
    let match;
    while (match = regex.exec(source))
        result.push(match.index);
    return result;
};
export const getSubstrings = (pattern, source) => {
    const expressionLength = pattern.length;
    const matchingSubstring = indexOfMatch => ({match: true, text: source.substr(indexOfMatch, expressionLength)});
    const unmatchedSubstring = (startIndex, endIndex = null) => ({match: false, text: endIndex ? source.slice(startIndex, endIndex) : source.slice(startIndex)});
    const indexOfMatches = getMatchIndices(pattern, source);
    const list = [];
    if(indexOfMatches.length > 0) {
        if (indexOfMatches[0] !== 0) list.push(unmatchedSubstring(0, indexOfMatches[0]));
        indexOfMatches.forEach((matchIndex, idx) => {
            list.push(matchingSubstring(matchIndex));
            const unmatchedIndex = matchIndex + expressionLength;
            const isLastMatch = idx + 1 === indexOfMatches.length;
            if (unmatchedIndex + 1 < source.length) {
                const endIndex = !isLastMatch ? indexOfMatches[idx + 1] : null;
                list.push(unmatchedSubstring(unmatchedIndex, endIndex));
            }
        });
    }
    return list;
};
export const formatPattern = (expression) => {
    return '[' + formatRegex(expression) + ']+';
};
export const trim = (character, value) => {
    return trimTrailing(character, trimLeading(character, value));
};
export const trimLeading = (character, value, ignoreCase = true) => {
    if([character, value].every(param => hasLength(param))){
        const expression = SymbolHandler[LEADING] + formatPattern(character);
        return value.replace(toRegExp(expression, ignoreCase), '');
    }
};
export const trimTrailing = (character, value, ignoreCase = true) => {
    if([character, value].every(param => hasLength(param))){
        const expression = formatPattern(character) + SymbolHandler[TRAILING];
        return value.replace(toRegExp(expression, ignoreCase), '');
    }
};
export const toRegExp = (expression, ignoreCase = true) => {
    let options = OptionsHandler[GLOBAL];
    if(ignoreCase) options += OptionHandler[IGNORE_CASE];
    return hasLength(expression) ? new RegExp(expression, options) : null;
};
export const hasLength = (value) => {
    return value && typeof value === 'string' && value.length >= 1;
};
export const combineURL = (url, endpoint) => {
    console.log("URL", url, "ENDPOINT", endpoint);
    if(hasLength(url) && hasLength(endpoint)) return [
        trimTrailing(CHARACTERS.FORWARD_SLASH, url),
        trimLeading(CHARACTERS.FORWARD_SLASH, endpoint)
    ].join(CHARACTERS.FORWARD_SLASH);
    else if(hasLength(url)) return trimTrailing(url) + CHARACTERS.FORWARD_SLASH;
    return null;
};
export const camelCaseToProperCase = name => name.charAt(0).toUpperCase() + name.replace(PatternHandler[UPPERCASE], match => ' ' + match).slice(1);
export const properCaseToCamelCase = name => typeof name === 'string' ? name.charAt(0).toLowerCase() + name.slice(1).replace(PatternHandler[WHITESPACE], '') : name;
export const formatSnackbarAlert = (...parts) => parts.map(str => str.charAt(0).toUpperCase() + str.replace(PatternHandler[UPPERCASE], match => ' ' + match).slice(1)).join(' ').toUpperCase();
export const constantCaseToProperCase = constantName => constantName.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');