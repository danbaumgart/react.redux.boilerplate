import React, {PropTypes} from 'react';
import SubmitButton from '../../ui/common/SubmitButton';
import InputField from '../../ui/InputField';
import FormPaper from '../../ui/common/formPaper';

const RegistrationForm = ({account, update, save, errors, saving}) => {
  let passwordHasValue = account.password && account.password !== '';
  let passwordHasErrors = errors && errors.password && errors.password.length > 0;
  let enableConfirmPassword = !!(passwordHasValue) && (!passwordHasErrors);
  let formErrors = Object.keys(errors).filter(field => errors[field] && errors[field].length > 0);
  console.log("REGISTRATION FORM", formErrors);
  let hasFormErrors = formErrors.length > 0;
  return (
    <FormPaper>
      <InputField name="emailAddress"
                  placeholder="Enter your email address"
                  value={account.emailAddress}
                  autoValidate="off"
                  errors={errors.emailAddress}
                  onChange={update}/>
      <InputField name="firstName"
                  placeholder="Enter your first name"
                  value={account.firstName}
                  autoValidate="off"
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
                  autoValidate="off"
                  type="password"
                  errors={errors.password}
                  onChange={update}/>
      {enableConfirmPassword && <InputField name="confirmPassword"
                                            placeholder="Enter your password"
                                            value={account.confirmPassword}
                                            autoValidate="off"
                                            type="password"
                                            disabled={!enableConfirmPassword}
                                            errors={errors.confirmPassword}
                                            onChange={update}/>}
      <SubmitButton
        onSave={save}
        disable={saving || hasFormErrors}
        label="Register"/>
    </FormPaper>
  );
};

RegistrationForm.propTypes = {
  account: React.PropTypes.object.isRequired,
  update: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};
RegistrationForm.defaultProps = {
  errors: {}
};


export default RegistrationForm;
