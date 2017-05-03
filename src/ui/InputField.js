import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const InputField = ({name, onChange, type, placeholder, value, errors, disabled}) => {
  const field = Object.assign({},
    {label: name.charAt(0).toUpperCase() + name.replace(/[A-Z]/g, (match)=> ' ' + match).slice(1)});
  if(Array.isArray(errors) && errors.length)
    Object.assign(field, {errors:  <span><ul>{errors.map(error => <li key={error}>{error}</li>)}</ul></span>}, {style: {backgroundColor: "white"}});
  if(disabled)
    Object.assign(field, {style: Object.assign({}, field.style, {cursor: "default"})});

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
  fixedLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.array,
  disabled: PropTypes.bool
};
InputField.defaultProps = {
  type: 'text',
  fixedLabel: false,
  placeholder: null,
  value: '',
  errors: [],
  disabled: false
};


export default InputField;
