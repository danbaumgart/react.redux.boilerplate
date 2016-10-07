import React, {PropTypes} from 'react';
import FormInput from '../common/FormInput';
import SubmitButton from '../common/SubmitButton';

const RegistrationForm = ({account, update, save, errors, saving}) => {``
  return (
    <form className="form-horizontal">
      <FormInput label="Email Address"
                 name="username"
                 placeholder="Enter your email address"
                 value={account.username}
                 type="email"
                 errors={errors.username}
                 onChange={update}/>
      <FormInput label="First Name"
                 name="first"
                 placeholder="Enter your first name"
                 value={account.first}
                 errors={errors.first}
                 onChange={update}/>
      <FormInput label="Last Name"
                 name="last"
                 placeholder="Enter your last name"
                 value={account.last}
                 errors={errors.last}
                 onChange={update}/>
      <FormInput label="Password"
                 name="password"
                 placeholder="Enter your password"
                 value={account.password}
                 type="password"
                 errors={errors.password}
                 onChange={update}/>
      <FormInput label="Confirm Password"
                 name="confirmPassword"
                 placeholder="Enter your password"
                 value={account.confirmPassword}
                 type="password"
                 errors={errors.confirmPassword}
                 onChange={update}/>
      <div className="control-group">
        <SubmitButton
        onSave={save}
        disable={saving}
        label={!saving ? "Register" : "Register..."} />
      </div>
    </form>
  );
};

RegistrationForm.propTypes = {
  account: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.object
};
RegistrationForm.defaultProps = {
  errors: {}
}


export default RegistrationForm;
