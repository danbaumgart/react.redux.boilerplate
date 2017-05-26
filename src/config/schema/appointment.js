import PROPERTIES from '../../views/appointment/constants/properties';
import {TEXT_AREA, CHECKBOX, TIME_PICKER, DATE_PICKER} from '../../ui/constants/inputTypes';
const _LabelHandler = {
    [PROPERTIES.TIME]: 'Time',
    [PROPERTIES.DATE]: 'Date',
    [PROPERTIES.DETAILS]: 'Details',
    [PROPERTIES.FLEXIBLE]: 'Flexible'
};
const _TypeHandler = {
    [PROPERTIES.TIME]: TIME_PICKER,
    [PROPERTIES.DATE]: DATE_PICKER,
    [PROPERTIES.DETAILS]: TEXT_AREA,
    [PROPERTIES.FLEXIBLE]: CHECKBOX
};
export default {...Object.keys(PROPERTIES)
    .map(property => ({
        [property]:{
            label: _LabelHandler[property],
            type: _TypeHandler[property]
        }
    }))
};
