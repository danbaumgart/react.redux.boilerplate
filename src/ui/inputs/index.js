import _TimePicker from './timePicker';
import _DatePicker from './datePicker';
import _TextArea from './textArea';
import _Checkbox from './checkbox';
import _TextField from './textField';
import _MaskedField from './masks/maskedField';
import _PhoneNumber from './masks/phoneNumber';
import _RaisedButton from '../common/raisedButton';
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
    RaisedButton: _RaisedButton,
    AutoComplete: _AutoComplete
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
    RaisedButton,
    AutoComplete
} = FormInputs;
