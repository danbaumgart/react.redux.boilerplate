import CONDITIONS from './conditions';
export default {
    [CONDITIONS.ALPHA]: /[A-Za-z]/,
    [CONDITIONS.ALPHANUMERIC]: /[^_\W\s]/,
    [CONDITIONS.DATE]: /^(0?\d|1[0-2])\/(0?\d|1\d|2\d|3[01])\/(19|20)\d{2}$/,
    [CONDITIONS.EMAIL]: /^([\w.-]+[^\W])(@[\w.-]+)(\.[^\W_]+)$/,
    [CONDITIONS.LOWERCASE]: /[a-z]/,
    [CONDITIONS.NUMERIC]: /[\d]/,
    [CONDITIONS.SPECIAL]: /([^\w\s]|_)/,
    [CONDITIONS.TIME]: /^(0?[1-9]|1[0-2])(\s?:\s?)([0-5]\d)(\s?[pPaA][mM])$/,
    [CONDITIONS.UPPERCASE]: /[A-Z]/,
    [CONDITIONS.RESTRICT.ALPHA]: /^[A-Za-z]+$/,
    [CONDITIONS.RESTRICT.ALPHANUMERIC]: /^[^_\W\s]+$/,
    [CONDITIONS.RESTRICT.NUMERIC]: /^[\d]+$/
};
