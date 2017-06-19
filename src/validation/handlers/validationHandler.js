import CONDITIONS from '../constants/conditions';
import {patternMatches} from '../../utils/stringUtils';
import {DateTime} from '../../utils/model/dateTimeModel';
import EXPRESSIONS from '../constants/expressions';
export default {
    [CONDITIONS.REQUIRED]: (input) => input && input !== '',
    [CONDITIONS.EMAIL]: (input) => EXPRESSIONS[CONDITIONS.EMAIL].test(input),
    [CONDITIONS.NUMBER]: (input) => !Number.isNaN(Number(input)),
    [CONDITIONS.INTEGER]: (input) => input % 1 === 0,
    [CONDITIONS.DATE]: (input) => DateTime.isDateModel(input) || DateTime.isStandardDate(input) || EXPRESSIONS[CONDITIONS.DATE].test(input),
    [CONDITIONS.TIME]: (input) => DateTime.isTimeModel(input) || DateTime.isStandardDate(input) || EXPRESSIONS[CONDITIONS.TIME].test(input),
    [CONDITIONS.ALPHA]: (input) => EXPRESSIONS[CONDITIONS.ALPHA].test(input),
    [CONDITIONS.NUMERIC]: (input) => EXPRESSIONS[CONDITIONS.NUMERIC].test(input),
    [CONDITIONS.SPECIAL]: (input) => EXPRESSIONS[CONDITIONS.SPECIAL].test(input),
    [CONDITIONS.UPPERCASE]: (input) => EXPRESSIONS[CONDITIONS.UPPERCASE].test(input),
    [CONDITIONS.LOWERCASE]: (input) => EXPRESSIONS[CONDITIONS.LOWERCASE].test(input),
    [CONDITIONS.MINIMUM.LENGTH]: (input, minlength) => input && input.length >= minlength,
    [CONDITIONS.MINIMUM.VALUE]: (input, minvalue) => input && input >= minvalue,
    [CONDITIONS.MINIMUM.ALPHA]: (input, mincount) => patternMatches(input, EXPRESSIONS[CONDITIONS.ALPHA]).length >= mincount,
    [CONDITIONS.MINIMUM.NUMERIC]: (input, mincount) => patternMatches(input, EXPRESSIONS[CONDITIONS.NUMERIC]).length >= mincount,
    [CONDITIONS.MINIMUM.SPECIAL]: (input, mincount) => patternMatches(input, EXPRESSIONS[CONDITIONS.SPECIAL]).length >= mincount,
    [CONDITIONS.MINIMUM.UPPERCASE]: (input, mincount) => patternMatches(input, EXPRESSIONS[CONDITIONS.UPPERCASE]).length >= mincount,
    [CONDITIONS.MINIMUM.LOWERCASE]: (input, mincount) => patternMatches(input, EXPRESSIONS[CONDITIONS.LOWERCASE]).length >= mincount,
    [CONDITIONS.MAXIMUM.LENGTH]: (input, maxlength) => patternMatches(input, EXPRESSIONS[CONDITIONS.LENGTH]).length <= maxlength,
    [CONDITIONS.MAXIMUM.VALUE]: (input, maxvalue) => patternMatches(input, EXPRESSIONS[CONDITIONS.VALUE]).length <= maxvalue,
    [CONDITIONS.RESTRICT.ALPHA]: (input) => EXPRESSIONS[CONDITIONS.ALPHA].test(input),
    [CONDITIONS.RESTRICT.NUMERIC]: (input) => EXPRESSIONS[CONDITIONS.NUMERIC].test(input),
    [CONDITIONS.RESTRICT.ALPHANUMERIC]: (input) => EXPRESSIONS[CONDITIONS.ALPHANUMERIC].test(input),
    [CONDITIONS.RESTRICT.VALUE]: (input, value) => new RegExp('^' + value + '$').test(input),
    [CONDITIONS.UNAVAILABLE]: (input, callback) => Promise.resolve(callback(input))
};
