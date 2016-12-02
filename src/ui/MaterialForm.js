import React, {PropTypes} from 'react';
import SubmitButton from './SubmitButton';
import InputField from './InputField';
import Paper from 'material-ui/Paper';
import CheckboxInput from './CheckboxInput';
import PageTitle from './PageTitle';
import restructure from '../utils/restructure';

const MaterialForm = ({fields, values, update, save, errors = {}, loading, title = null, submitLabel = null}) => {
  const renderedFields = fields.map((field) => {
    let label = restructure.string.properCase(field.name);
    let {name, type, placeholder = 'Enter ' + label + '...'} = field;
    switch(type){
      case 'checkbox':
        return (<CheckboxInput key={name} label={label} name={name} value={values[name]} update={update}/>);
      case 'password':
      case 'email':
      case 'number':
      case 'text':
      default:
        return (
          <InputField
            key={name}
            name={name}
            label={label}
            type={type}
            errors={errors[name]}
            value={values[name]}
            placeholder={placeholder}
            onChange={update} />);
        break;
    }
  });
  let hasFormErrors = !!(Object.keys(errors).filter(field => Array.isArray(errors[field]) && errors[field].length > 0).length);
  return (
    <div>
      {title && title !== '' && <PageTitle title={title} />}
      <Paper zDepth={1} style={{display: "inline-block", width: "100%", padding: "10px"}}>
        {renderedFields}
        <SubmitButton onSave={save} disable={loading || hasFormErrors} label={submitLabel || 'Submit'} />
      </Paper>
    </div>
  );
};

MaterialForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  errors: PropTypes.object,
  submitLabel: PropTypes.string
};
MaterialForm.defaultProps = {
  title: null,
  errors: {},
  submitLabel: null
};


export default MaterialForm;
