import React, {PropTypes} from 'react';
import SubmitButton from '../common/SubmitButton';
import InputField from '../../ui/InputField';

const RegistrationForm = ({account, update, save, errors, saving}) => {
  const formStyle = {
    paddingLeft: "10px",
    paddingRight: "10px"
  };
  return (
    <form className="form-horizontal" style={formStyle}>
      <InputField label="Email Address"
                  name="username"
                  placeholder="Enter your email address"
                  value={account.username}
                  type="email"
                  errors={errors.username}
                  onChange={update}/>
      <InputField label="First Name"
                  name="first"
                  placeholder="Enter your first name"
                  value={account.first}
                  errors={errors.first}
                  onChange={update}/>
      <InputField label="Last Name"
                  name="last"
                  placeholder="Enter your last name"
                  value={account.last}
                  errors={errors.last}
                  onChange={update}/>
      <InputField label="Password"
                  name="password"
                  placeholder="Enter your password"
                  value={account.password}
                  type="password"
                  errors={errors.password}
                  onChange={update}/>
      <InputField label="Confirm Password"
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
          label={!saving ? "Register" : "Register"}/>
      </div>
    </form>
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
}


export default RegistrationForm;
