import _TimePicker from './timePicker';
import _DatePicker from './datePicker';
import _TextArea from './textArea';
import _Checkbox from './checkbox';
import _TextField from './textField';
import _MaskedField from './maskedField';
import _PhoneNumber from './phoneNumber';
import _RaisedButton from '../common/raisedButton';
import _Paper from '../common/paper';
import _Typeahead from '../Typeahead';
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
    Typeahead: _Typeahead
};
export const {TimePicker, DatePicker, Checkbox, TextField, Typeahead, Paper, TextArea, MaskedField, PhoneNumber, RaisedButton} = FormInputs;