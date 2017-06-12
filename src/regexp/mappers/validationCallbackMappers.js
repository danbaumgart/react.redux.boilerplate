import PatternHandler from '../handlers/patternHandler';
const Templates = {
    getFormatTemplate(criteria) {
        return new RegExp(`^${criteria}$`);
    },
    getRepeatedPatternTemplate(criteria) {
        return new RegExp(`^${criteria}+$`, 'g');
    },
    getPatternMatchesTemplate(criteria) {
        return new RegExp(criteria, 'g');
    }
};
export default {
    toRequiredValidator() {
        return input => Boolean(input)
    },
    toFormattingValidator(criteria) {
        const pattern = PatternHandler[criteria] || criteria;
        return input => Templates.getFormatTemplate(pattern).test(input);
    },
    toNumberValidator() {
        return input => !Boolean(Number.isNaN(Number(input)));
    },
    toIntegerValidator() {
        const numberValidator = this.toNumberValidator();
        return input => numberValidator(input) && input % 1 === 0;
    },
    toValueValidator() {
        return (input, value) => Templates.getFormatTemplate(value).test(input);
    },
    toPatternValidator(criteria) {
        const pattern = PatternHandler[criteria] || criteria;
        return input => Templates.getRepeatedPatternTemplate(pattern).test(input)
    },
    toMinimumValueValidator() {
        const numberValidator = this.toNumberValidator();
        return (input, minimum) => typeof input === "number" ? input >= minimum :
            numberValidator(input) ? Number(input) >= minimum : false;
    },
    toMaximumValueValidator() {
        const numberValidator = this.toNumberValidator();
        return (input, maximum) => typeof input === "number" ? input <= maximum :
            numberValidator(input) ? Number(input) <= maximum : false;
    },
    toMaximumLengthValidator() {
        return (input, maximum) => typeof input === "string" && input.length <= maximum;
    },
    toMinimumLengthValidator() {
        return (input, minimum) => typeof input === "string" && input.length >= minimum;
    },
    toMinimumOccurrencesValidator(criteria) {
        const pattern = PatternHandler[criteria] || criteria;
        return (input, minimum) => {
            const patternMatches = input.matches(Templates.getPatternMatchesTemplate(pattern));
            return Array.isArray(patternMatches) ? patternMatches.length >= minimum : false;
        };
    },
    toMaximumOccurrencesValidator(criteria) {
        const pattern = PatternHandler[criteria] || criteria;
        return (input, maximum) => {
            const patternMatches = input.matches(Templates.getPatternMatchesTemplate(pattern));
            return Array.isArray(patternMatches) ? patternMatches.length <= maximum : false;
        };
    }
}
