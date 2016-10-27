import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createAccount, changeRegistrationForm, checkAvailability, changeRegistrationErrors} from '../../actions/registrationActions';
import {toastError, toastSuccess} from '../../actions/alertsActions';
import Validator from '../../utils/validate';
import types from '../../utils/enums/validation';
import PageTitle from '../common/PageTitle';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: this.props.errors,
      touched: {},
      submitted: false,
      loading: false
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.register = this.register.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  
  updateField(event) {
    let {name, value = ''} = event.target;
    const form = Object.assign({}, this.props.form, {[name]: value});
    let validation = this.props.validation.validateField(name, value);
    const errors = Object.assign({}, this.props.errors, {[name]: validation});
    if(name === 'emailAddress') this.props.actions.changeRegistrationForm(form)
      .then(res => res === types.UNAVAILABLE
          ? this.props.actions.changeRegistrationErrors(Object.assign(errors, {emailAddress: [types.UNAVAILABLE]}))
          : this.props.actions.changeRegistrationErrors(Object.assign(errors, {emailAddress: [types.UNAVAILABLE]}))
      ); else this.props.actions.changeRegistrationErrors(errors);
  }
  handleSuccess() {
    this.setState({
      loading: false,
      submitted: true
    });
    this.props.actions.toastSuccess({emailAddress: ["REGISTERED"]});
  }
  
  handleErrors(errors) {
    this.setState({
      loading: false,
      submitted: true
    });
    this.props.actions.toastError(errors);
  }
  
  register() {
    this.setState({
      loading: true,
      submitted: true
    });
    this.props.actions.createAccount(this.props.form)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }
  
  submitForm() {
    const formHasErrors = Object.keys(this.props.errors)
      .find(field => Array.isArray(this.props.errors[field]) && this.props.errors[field].length > 0);
    if(!formHasErrors)
      this.register();
    else
      this.setState({submitted: true});
  }
  
  render() {
    const errors = {};
    if (this.state.submitted)
      Object.assign(errors, this.props.errors);
    return (
      <div>
        <PageTitle title="Registration"/>
        <RegistrationForm account={this.props.form}
                          errors={errors}
                          update={this.updateField}
                          save={this.submitForm}
                          loading={this.state.loading}/>
      </div>
    );
  }
}


function initializeForm(...keys){
  const form = {}, errors = {}, schema = {};
  keys.forEach(key => {
    Object.assign(form, {[key]: ''});
    Object.assign(errors, {[key]: []});
    Object.assign(schema, {[key]: {}});
  });
  return Object.assign({}, {form}, {errors}, {schema});
}

RegistrationPage.propTypes = {
  form: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  errors: PropTypes.object
};
RegistrationPage.defaultProps = {
  errors: {}
};
RegistrationPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  const registration = initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword');
  let {form, errors, schema} = state.registration;
  if(form) Object.assign(registration, {form});
  if(errors) Object.assign(registration, {errors});
  if(schema) Object.assign(registration, {schema});
  Object.assign(registration, {
    validation: new Validator(Object.assign({}, registration.schema, {
      confirmPassword: {
      [types.RESTRICT_VALUE]: registration.form.password,
      [types.REQUIRED]: true
    }
  }))});
  console.log("FORM", registration);
  return registration;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({},
    {checkAvailability},
    {changeRegistrationForm},
    {createAccount},
    {toastSuccess},
    {toastError},
    {changeRegistrationErrors});
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
