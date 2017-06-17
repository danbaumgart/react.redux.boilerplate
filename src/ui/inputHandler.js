import * as Component from './inputs';
import * as INPUT from './constants/inputs';
export default {
    [INPUT.TIME_PICKER]: Component.TimePicker,
    [INPUT.DATE_PICKER]: Component.DatePicker,
    [INPUT.CHECKBOX]: Component.Checkbox,
    [INPUT.TEXT_AREA]: Component.TextArea,
    [INPUT.MASKED_FIELD]: Component.MaskedField,
    [INPUT.PHONE_NUMBER]: Component.PhoneNumber
    //[INPUT.AUTO_COMPLETE]: Component.AutoComplete
};
