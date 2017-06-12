import CRITERIA from '../../validation/constants/criteria';
export default {
    [CRITERIA.ALPHA]: '[A-Za-z]',
    [CRITERIA.ALPHANUMERIC]: '[^_\\W\\s]',
    [CRITERIA.DATE]: '(0?\\d|1[0-2])\\/(0?\\d|1\\d|2\\d|3[01])\\/(19|20)\\d{2}',
    [CRITERIA.EMAIL]: '([\\w.-]+[^\\W])(@[\\w.-]+)(\\.[^\\W_]+)',
    [CRITERIA.LOWERCASE]: '[a-z]',
    [CRITERIA.NUMERIC]: '[\\d]',
    [CRITERIA.SPECIAL]: '([^\\w\\s]|_)',
    [CRITERIA.TIME]: '(0?[1-9]|1[0-2])(\\s?:\\s?)([0-5]\\d)(\\s?[pPaA][mM])',
    [CRITERIA.UPPERCASE]: '[A-Z]'
};
