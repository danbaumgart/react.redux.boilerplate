import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
const InputField = ({name, onChange, label, placeholder, value, error}) => {
  return (
    <TextField
      name={name}
      onChange={onChange}
      floatingLabelText={label}
      hintText={placeholder}
      value={value}
      errorText={error}
      fullWidth={true}
      autoComplete="off"/>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};
InputField.defaultProps = {
  label: null,
  placeholder: null,
  value: '',
  error: null
};


export default InputField;
