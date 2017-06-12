import CONDITIONS from '../constants/conditions';
import EXPRESSIONS from '../constants/expressions';
export default {
    [CONDITIONS.REQUIRED](input){
        return input && input !== '';
    },
    [CONDITIONS.EMAIL](input){
        return EXPRESSIONS[CONDITIONS.EMAIL].test(input);
    },
    [CONDITIONS.NUMBER](input){
        return !Number.isNaN(Number(input));
    },
    [CONDITIONS.INTEGER](input){
        return input % 1 === 0;
    },
    [CONDITIONS.DATE](input){
        return EXPRESSIONS[CONDITIONS.DATE].test(input);
    },
    [CONDITIONS.TIME](input){
        return EXPRESSIONS[CONDITIONS.TIME].test(input);
    },
    [CONDITIONS.ALPHA](input){
        return EXPRESSIONS[CONDITIONS.ALPHA].test(input);
    },
    [CONDITIONS.NUMERIC](input){
        return EXPRESSIONS[CONDITIONS.NUMERIC].test(input);
    },
    [CONDITIONS.SPECIAL](input){
        return EXPRESSIONS[CONDITIONS.SPECIAL].test(input);
    },
    [CONDITIONS.UPPERCASE](input){
        return EXPRESSIONS[CONDITIONS.UPPERCASE].test(input);
    },
    [CONDITIONS.LOWERCASE](input){
        return EXPRESSIONS[CONDITIONS.LOWERCASE].test(input);
    },
    [CONDITIONS.MINIMUM.LENGTH](input, minlength){
        return input && input.length >= minlength;
    },
    [CONDITIONS.MINIMUM.VALUE](input, minvalue){
        return input && input >= minvalue;
    },
    [CONDITIONS.MINIMUM.ALPHA](input, mincount){
        return (input.match(EXPRESSIONS[CONDITIONS.ALPHA])).length >= mincount;
    },
    [CONDITIONS.MINIMUM.NUMERIC](input, mincount){
        return (input.match(EXPRESSIONS[CONDITIONS.NUMERIC])).length >= mincount;
    },
    [CONDITIONS.MINIMUM.SPECIAL](input, mincount){
        return (input.match(EXPRESSIONS[CONDITIONS.SPECIAL])).length >= mincount;
    },
    [CONDITIONS.MINIMUM.UPPERCASE](input, mincount){
        return (input.match(EXPRESSIONS[CONDITIONS.UPPERCASE])).length >= mincount;
    },
    [CONDITIONS.MINIMUM.LOWERCASE](input, mincount){
        return (input.match(EXPRESSIONS[CONDITIONS.LOWERCASE])).length >= mincount;
    },
    [CONDITIONS.MAXIMUM.LENGTH](input, maxlength){
        return input && input.length <= maxlength;
    },
    [CONDITIONS.MAXIMUM.VALUE](input, maxvalue){
        return input && input <= maxvalue;
    },
    [CONDITIONS.RESTRICT.ALPHA](input){
        return EXPRESSIONS[CONDITIONS.RESTRICT.ALPHA].test(input);
    },
    [CONDITIONS.RESTRICT.NUMERIC](input){
        return EXPRESSIONS[CONDITIONS.RESTRICT.NUMERIC].test(input);
    },
    [CONDITIONS.RESTRICT.ALPHANUMERIC](input){
        return EXPRESSIONS[CONDITIONS.RESTRICT.ALPHANUMERIC].test(input);
    },
    [CONDITIONS.RESTRICT.VALUE](input, value){
        return new RegExp('^' + value + '$').test(input);
    },
    [CONDITIONS.UNAVAILABLE](input, callback){
        return Promise.resolve(callback(input));
    }
};
