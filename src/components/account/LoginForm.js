import React, {PropTypes} from 'react';
import InputField from '../../ui/InputField';
import SubmitButton from '../common/SubmitButton';

const LoginForm = ({user, update, save, errors, saving}) => {
  return (
    <form className="form-horizontal">
      <InputField label="Usermame"
                  name="username"
                  placeholder="Enter your email address"
                  value={user.username}
                  type="email"
                  errors={errors.username}
                  fullWidth="true"
                  onChange={update}/>
      <InputField label="Password"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  type="password"
                  errors={errors.password}
                  fullWidth="true"
                  onChange={update}/>
      <div className="control-group">
        <SubmitButton
          onSave={save}
          disable={saving}
          label={!saving ? "Login" : "Login..."}/>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  validation: PropTypes.object
};
LoginForm.defaultProps = {
  errors: {},
  validation: {}
};


export default LoginForm;
