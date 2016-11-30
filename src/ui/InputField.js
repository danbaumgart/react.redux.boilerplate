import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import restructure from '../utils/restructure';

const InputField = ({name, onChange, type, placeholder, value, errors, disabled, label}) => {
  const field = Object.assign({},
    {label: label || restructure.string.properCase(name)});
  if(Array.isArray(errors) && errors.length)
    Object.assign(field, {errors:  <span><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></span>});
  if(disabled)
    Object.assign(field, {style: {cursor: "default"}});
  
  return (
    <Paper zDepth={1}>
    <TextField name={name}
               type={type}
               onChange={onChange}
               hintText={placeholder || field.label}
               inputStyle={field.style}
               underlineDisabledStyle={field.style}
               value={value}
               floatingLabelText={field.label}
               formNoValidate
               errorText={field.errors}
               autoComplete="off"
               disabled={disabled}
               fullWidth />
      </Paper>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.array,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
InputField.defaultProps = {
  type: 'text',
  placeholder: null,
  value: '',
  errors: [],
  disabled: false,
  label: null
};


export default InputField;
