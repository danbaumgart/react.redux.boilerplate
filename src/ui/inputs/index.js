import _TimePicker from './timePicker';
import _DatePicker from './datePicker';
import _TextArea from './textArea';
import _Checkbox from './checkbox';
import _TextField from './textField';
import _MaskedField from './masks/maskedField';
import _PhoneNumber from './masks/phoneNumber';
import _SelectField from 'material-ui/SelectField';
import _Paper from '../common/formPaper';
import _AutoComplete from './autoComplete';
const FormInputs = {
    TimePicker: _TimePicker,
    DatePicker: _DatePicker,
    Checkbox: _Checkbox,
    TextField: _TextField,
    MaskedField: _MaskedField,
    PhoneNumber: _PhoneNumber,
    Paper: _Paper,
    TextArea: _TextArea,
    AutoComplete: _AutoComplete,
    SelectField: _SelectField
};
export const {
    TimePicker,
    DatePicker,
    Checkbox,
    TextField,
    Paper,
    TextArea,
    MaskedField,
    PhoneNumber,
    AutoComplete,
    SelectField
} = FormInputs;
