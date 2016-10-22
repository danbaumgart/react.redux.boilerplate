import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import asyncValidate from '../../utils/asyncValidate';
const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email']
  requiredFields.forEach(field => {
    if(!values[field]) {
      errors[field] = 'Required'
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
};

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={firstName =>
          <TextField hintText = "First Name"
                     floatingLabelText="First Name"
                     errorText = {firstName.touched && firstName.error}
                     value={firstName.values}
          />
        }/>
      </div>
      <div>
        <Field name="lastName" component={lastName =>
          <TextField
            hintText = "Last Name"
            floatingLabelText="Last Name"
            errorText = {lastName.touched && lastName.error}
            {...lastName}
          />
        }/>
      </div>
      <div>
        <Field name="email" component={email =>
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            errorText = {email.touched && email.error}
            {...email}
          />
        }/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm);
