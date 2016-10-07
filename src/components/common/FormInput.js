import React, {PropTypes} from 'react';

const FormInput = ({label, onChange, name, value, type, placeholder, errors}) => {
  let hasErrors = errors && Array.isArray(errors) && errors.length > 0;
  const form = {
    group:'control-group',
    errors:null
  };
  if(hasErrors)
    Object.assign(form,
      {group: form.group + ' has-error'},
      {errors: <ul>{errors.map((error,idx) => <li key={name + '.error[' + idx + ']'}>{error}</li>)}</ul>}
    );
  if(label.slice(-1) !== ':')
    label += ':';
  return (
    <div className={form.group} noValidate>
      <label className="control-label col-sm-3" htmlFor={name}>{label}</label>
      <div className="col-sm-9">
        <input className="form-control"
               type={type}
               name={name}
               id={name}
               placeholder={placeholder}
               value={value}
               onChange={onChange}
               autoComplete="off" />
        {hasErrors && <div className="alert alert-danger">{form.errors}</div>}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name:PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  type:PropTypes.oneOf(['text','number','email']),
  placeholder: PropTypes.string,
  errors: PropTypes.array
};

FormInput.defaultProps = {
  value: '',
  type:'text',
  placeholder: '',
  option:false,
  errors: []
};

export default FormInput;
