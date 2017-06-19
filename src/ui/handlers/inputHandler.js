import INPUTS from '../constants/inputs';
import {
    TextField,
    TextArea,
    Checkbox,
    AutoComplete,
    DatePicker,
    TimePicker,
    MaskedField,
    PhoneNumber
} from '../inputs';
export default {
    [INPUTS.TEXT_FIELD]: TextField,
    [INPUTS.TEXT_AREA]: TextArea,
    [INPUTS.SELECT_FIELD]: null,
    [INPUTS.CHECKBOX]: Checkbox,
    [INPUTS.AUTO_COMPLETE]: AutoComplete,
    [INPUTS.DATE_PICKER]: DatePicker,
    [INPUTS.TIME_PICKER]: TimePicker,
    [INPUTS.MASKED_FIELD]: MaskedField,
    [INPUTS.PHONE_NUMBER]: PhoneNumber
};
