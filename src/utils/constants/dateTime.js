const MERIDIEM_TYPES = {
    AM: 'AM',
    PM: 'PM'
};
const METRICS = {
    TIME: 'time',
    DATE: 'date'
};
const UNITS = {
    HOUR: 'hour',
    DAY: 'day',
    MONTH: 'month',
    MINUTE: 'minute',
    SECOND: 'second',
    MILLISECOND: 'millisecond',
    YEAR: 'year',
    MERIDIEM: 'meridiem'
};
export const {HOUR, DAY, MONTH, MINUTE, SECOND, MILLISECOND, YEAR, MERIDIEM} = UNITS;
export const {AM, PM} = MERIDIEM_TYPES;
export const {DATE, TIME} = METRICS;
export default {AM, PM, HOUR, DAY, MONTH, MINUTE, SECOND, MILLISECOND, YEAR, MERIDIEM, DATE, TIME};
