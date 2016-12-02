import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setLoginValue, loginAccount, setLoginForm} from '../../actions/loginActions';
import Validator from '../../utils/validate';
import MaterialForm from '../../ui/MaterialForm';
import {browserHistory} from 'react-router';
const hasErrors = (errors) => Object.keys(errors).filter(field => Array.isArray(errors[field]) && errors[field].length > 0).length > 0;

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.login = this.login.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
  }
  updateField({target:{name, value}}, isInputChecked) {
    this.props.actions.setLoginValue({name, value: name === 'rememberMe' ? isInputChecked : value});
  }
  login() {
    Promise.resolve(this.props.actions.setLoginForm({saving: true, submitted: true}))
      .then(this.props.actions.loginAccount(this.props.values))
      .then();
  }
  submitForm(event) {
    const {values, errors, validation, actions} = this.props;
    var formErrors = validation.validateForm(values);
    console.log("FORM ERRORS", formErrors);
    if(!hasErrors(formErrors) && !hasErrors(errors))
      this.login();
    else
      actions.setLoginForm({submitted: true});
  }
  changeRoute({link:{path}}){
    browserHistory.push(path);
  }
  
  render(){
    const {errors, form, validation, values, fields} = this.props;
    let loading = !!form.submitted && (!!form.loading || !!form.saving);
    const errorMessages = form.submitted ? validation.getAllDefaultErrorMessages({errors: Object.assign(validation.validateForm(values), errors)}) : {};
    console.log("ERR", errorMessages);
    return (
      <div>
        <MaterialForm
          title="Login"
          fields={fields}
          values={values}
          errors={errorMessages}
          update={this.updateField}
          save={this.submitForm}
          loading={loading}
          changeRoute={this.changeRoute}
          submitLabel="Login"/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  values: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
LoginPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  let loggedIn = state.user && state.user.timestamp - new Date() > 0;
  const {schema, values, errors, form, fields} = state.login;
  const validation = new Validator(Object.assign({}, schema));
  console.log("LOGGED IN", validation);
  return {values, errors, form, validation, fields};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},
      {loginAccount},
      {setLoginForm},
      {setLoginValue}), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
