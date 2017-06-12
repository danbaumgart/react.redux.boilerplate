import CRITERIA from './constants/criteria';
import ValidationMapper from '../regexp/mappers/validationCallbackMappers';

export const Restrictions = {
    [CRITERIA.INTEGER]: ValidationMapper.toIntegerValidator(),
    [CRITERIA.NUMBER]: ValidationMapper.toNumberValidator(),
    [CRITERIA.EMAIL]: ValidationMapper.toFormattingValidator(CRITERIA.EMAIL),
    [CRITERIA.DATE]: ValidationMapper.toFormattingValidator(CRITERIA.DATE),
    [CRITERIA.TIME]: ValidationMapper.toFormattingValidator(CRITERIA.TIME),
    [CRITERIA.ALPHA]: ValidationMapper.toPatternValidator(CRITERIA.ALPHA),
    [CRITERIA.NUMERIC]: ValidationMapper.toPatternValidator(CRITERIA.NUMERIC),
    [CRITERIA.ALPHANUMERIC]: ValidationMapper.toPatternValidator(CRITERIA.ALPHANUMERIC),
    [CRITERIA.VALUE]: ValidationMapper.toValueValidator(CRITERIA.VALUE)
};
export const MinimumConstraints = {
    [CRITERIA.LENGTH]: ValidationMapper.toMinimumLengthValidator(),
    [CRITERIA.ALPHA]: ValidationMapper.toMinimumOccurrencesValidator(CRITERIA.ALPHA),
    [CRITERIA.NUMERIC]: ValidationMapper.toMinimumOccurrencesValidator(CRITERIA.NUMERIC),
    [CRITERIA.ALPHANUMERIC]: ValidationMapper.toMinimumOccurrencesValidator(CRITERIA.ALPHANUMERIC),
    [CRITERIA.VALUE]: ValidationMapper.toMinimumValueValidator()
};
export const MaximumConstraints = {
    [CRITERIA.LENGTH]: ValidationMapper.toMaximumLengthValidator(),
    [CRITERIA.ALPHA]: ValidationMapper.toMaximumOccurrencesValidator(CRITERIA.ALPHA),
    [CRITERIA.NUMERIC]: ValidationMapper.toMaximumOccurrencesValidator(CRITERIA.NUMERIC),
    [CRITERIA.ALPHANUMERIC]: ValidationMapper.toMaximumOccurrencesValidator(CRITERIA.ALPHANUMERIC),
    [CRITERIA.VALUE]: ValidationMapper.toMaximumValueValidator()
};
export default {MaximumConstraints, MinimumConstraints, Restrictions};

