import APPOINTMENT from '../properties/appointment';
import {TEXT_AREA, CHECKBOX, TIME_PICKER, DATE_PICKER} from '../../ui/constants/inputs';
const _LabelHandler = {
    [APPOINTMENT.TIME]: 'Time',
    [APPOINTMENT.DATE]: 'Date',
    [APPOINTMENT.DETAILS]: 'Details',
    [APPOINTMENT.FLEXIBLE]: 'Flexible'
};
const _TypeHandler = {
    [APPOINTMENT.TIME]: TIME_PICKER,
    [APPOINTMENT.DATE]: DATE_PICKER,
    [APPOINTMENT.DETAILS]: TEXT_AREA,
    [APPOINTMENT.FLEXIBLE]: CHECKBOX
};
export default {...Object.keys(APPOINTMENT)
    .map(property => ({
        [property]:{
            label: _LabelHandler[property],
            type: _TypeHandler[property]
        }
    }))
};
