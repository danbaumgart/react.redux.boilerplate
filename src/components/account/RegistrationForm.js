import React, {PropTypes} from 'react';
import SubmitButton from '../common/SubmitButton';
import InputField from '../../ui/InputField';
import Paper from 'material-ui/Paper';

const RegistrationForm = ({account, update, save, errors, loading}) => {
  let passwordHasValue = account.password && account.password !== '';
  let passwordHasErrors = errors && errors.password && errors.password.length > 0;
  let enableConfirmPassword = !!(passwordHasValue) && (!passwordHasErrors);
  let formErrors = Object.keys(errors).filter(field => errors[field] && errors[field].length > 0);
  console.log("REGISTRATION FORM", formErrors);
  let hasFormErrors = formErrors.length > 0;
  return (
    <Paper zDepth={1} style={{display: "inline-block", width: "100%", padding: "10px"}}>
      <InputField name="emailAddress"
                  placeholder="Enter your email address"
                  value={account.emailAddress}
                  errors={errors.emailAddress}
                  onChange={update}/>
      <InputField name="firstName"
                  placeholder="Enter your first name"
                  value={account.firstName}
                  errors={errors.firstName}
                  onChange={update}/>
      <InputField name="lastName"
                  placeholder="Enter your last name"
                  value={account.lastName}
                  errors={errors.lastName}
                  onChange={update}/>
      <InputField name="password"
                  placeholder="Enter your password"
                  value={account.password}
                  type="password"
                  errors={errors.password}
                  onChange={update}/>
      {enableConfirmPassword && <InputField name="confirmPassword"
                                            placeholder="Enter your password"
                                            value={account.confirmPassword}
                                            type="password"
                                            disabled={!enableConfirmPassword}
                                            errors={errors.confirmPassword}
                                            onChange={update}/>}
      <SubmitButton
        onSave={save}
        disable={loading || hasFormErrors}
        label="Register"/>
    </Paper>
  );
};

RegistrationForm.propTypes = {
  account: React.PropTypes.object.isRequired,
  update: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};
RegistrationForm.defaultProps = {
  errors: {}
};


export default RegistrationForm;
