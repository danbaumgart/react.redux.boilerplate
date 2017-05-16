import {WHITESPACE} from './regex/patterns';
import {TRAILING, LEADING} from './regex/symbols';
import {GLOBAL, IGNORE_CASE} from './regex/options';
import {FORWARD_SLASH} from './constants/characters';

export const formatRegex = expression => {
    return expression.includes(' ') ?
        expression.split(' ').join(WHITESPACE) :
        expression;
};
export const getMatchIndices = (pattern, source) => {
    const result = [];
    const regex = new RegExp(pattern, GLOBAL + IGNORE_CASE);
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
        const expression = LEADING + formatPattern(character);
        return value.replace(toRegExp(expression, ignoreCase), '');
    }
};
export const trimTrailing = (character, value, ignoreCase = true) => {
    if([character, value].every(param => hasLength(param))){
        const expression = formatPattern(character) + TRAILING;
        return value.replace(toRegExp(expression, ignoreCase), '');
    }
};
export const toRegExp = (expression, ignoreCase = true) => {
    let options = GLOBAL;
    if(ignoreCase) options += IGNORE_CASE;
    return hasLength(expression) ? new RegExp(expression, options) : null;
};
export const hasLength = (value) => {
    return value && typeof value === 'string' && value.length >= 1;
};
export const combineURL = (url, endpoint) => {
    console.log("URL", url, "ENDPOINT", endpoint);
    if(hasLength(url) && hasLength(endpoint)) return [
        trimTrailing(FORWARD_SLASH, url),
        trimLeading(FORWARD_SLASH, endpoint)
    ].join(FORWARD_SLASH);
    else if(hasLength(url)) return trimTrailing(url) + FORWARD_SLASH;
    return null;
};
export const camelCaseToProperCase = name => name.charAt(0).toUpperCase() + name.replace(/[A-Z]/g, match => ' ' + match).slice(1);
export const formatSnackbarAlert = (...parts) => parts.map(str => str.charAt(0).toUpperCase() + str.replace(/[A-Z]/g, match => ' ' + match).slice(1)).join(' ').toUpperCase();
export const constantCaseToProperCase = constantName => constantName.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
export default {
    combineURL,
    formatPattern,
    formatRegex,
    getMatchIndices,
    toRegExp,
    getSubstrings,
    hasLength,
    trim,
    trimLeading,
    trimTrailing,
    camelCaseToProperCase,
    formatSnackbarAlert,
    constantCaseToProperCase
};
