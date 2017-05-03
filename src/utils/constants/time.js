import {invertObjectProperties} from '../propertyUtils';
const MERIDIEM = {
    AM: 'AM',
    PM: 'PM'
};
const TIME = {
    HOUR: 'hour',
    DAY: 'day',
    MONTH: 'month',
    MINUTE: 'minute',
    SECOND: 'second'
};
export const {HOUR, DAY, MONTH, MINUTE, SECOND} = TIME;
export const {AM, PM} = MERIDIEM;
export default {AM, PM, HOUR, DAY, MONTH, MINUTE, SECOND};
