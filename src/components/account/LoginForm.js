import React, {PropTypes} from 'react';
import SubmitButton from '../common/SubmitButton';
import InputField from '../../ui/InputField';
import Paper from 'material-ui/Paper';
import CheckboxInput from '../../ui/CheckboxInput';
import Checkbox from 'material-ui/Checkbox';

const LoginForm = ({values, update, save, errors, loading}) => {
  return (
    <Paper zDepth={1} style={{display: "inline-block", width: "100%", padding: "10px"}}>
      <InputField name="emailAddress"
                  placeholder="Enter your email address"
                  value={values.emailAddress}
                  errors={errors.emailAddress}
                  onChange={update}/>
      <InputField name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  type="password"
                  errors={errors.password}
                  onChange={update}/>
      <Checkbox name="rememberMe" defaultChecked={values.rememberMe} label="Remember me" onCheck={update}/>
        <SubmitButton
          onSave={save}
          disable={loading}
          label="Login"/>
      </Paper>
  );
};

LoginForm.propTypes = {
  values: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object
};
LoginForm.defaultProps = {
  errors: {}
};


export default LoginForm;
