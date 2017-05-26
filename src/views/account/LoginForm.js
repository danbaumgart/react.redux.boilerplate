import React, {PropTypes} from 'react';
import InputField from '../../ui/InputField';
import SubmitButton from '../../ui/common/SubmitButton';
import CheckboxInput from '../../ui/CheckboxInput';
import Checkbox from 'material-ui/Checkbox';
import {toastError, toastSuccess} from '../../actions/alertsActions';

const LoginForm = ({user, update, save, errors, saving}) => {
  console.log(user.rememberMe);
  return (
    <div>
      <InputField label="Usermame"
                  name="username"
                  placeholder="Enter your email address"
                  value={user.emailAddress}
                  type="email"
                  errors={errors.emailAddress}
                  onChange={update}/>
      <br/>
      <InputField label="Password"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  type="password"
                  errors={errors.password}
                  onChange={update}/>
      <br/>
      <Checkbox name="rememberMe" defaultChecked={user.rememberMe} label="Remember me" onCheck={update}/>
      <div className="control-group">
        <SubmitButton
          onSave={save}
          disable={saving}
          label={!saving ? "Login" : "Login"}/>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  update: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object,
  validation: React.PropTypes.object
};
LoginForm.defaultProps = {
  errors: {},
  validation: {}
};


export default LoginForm;
