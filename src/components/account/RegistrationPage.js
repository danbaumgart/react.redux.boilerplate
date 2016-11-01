import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createAccount, changeRegistrationForm, checkAvailability, changeRegistrationErrors} from '../../actions/registrationActions';
import Validator from '../../utils/validate';
import types from '../../utils/enums/validation';
import PageTitle from '../common/PageTitle';
import {initializeForm} from '../../utils/forms';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      submitted: false,
      loading: false
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.register = this.register.bind(this);
  }
  updateField({target:{name, value}}) {
    const form = Object.assign({}, this.props.form, {[name]: value});
    const errors = this.props.validation.validateForm(form);
    const updateFormPromise = this.props.actions.changeRegistrationForm(form);
    if(name !== 'emailAddress') {
      if(this.props.errors.emailAddress.find(error => error === types.UNAVAILABLE))
        errors.emailAddress.push(types.UNAVAILABLE);
      this.props.actions.changeRegistrationErrors(errors);
    } else {
      Promise.all([
        checkAvailability(form),
        this.props.actions.changeRegistrationErrors(errors),
        updateFormPromise
      ]).then(response => {
        if(response[0] === types.UNAVAILABLE && !errors.emailAddress.includes(types.UNAVAILABLE))
          this.props.actions.changeRegistrationErrors(Object.assign({}, errors, {emailAddress: [...errors.emailAddress,types.UNAVAILABLE]}))});
    }
  }
  
  register() {
    Promise.all([
      Promise.resolve(this.setState({loading: true})),
      this.props.actions.createAccount(Object.assign({},this.props.form))
    ]).then(result => this.setState({loading: false, submitted: true}));
  }
    
  submitForm() {
    const errors = Object.assign({}, this.props.errors);
    console.log("ERRORS PROPS", errors);
    let combined = Object.assign({}, errors, this.props.validation.validateForm(this.props.form));
    console.log("ERRORS MERGED", combined);
    let formHasErrors = Object.keys(this.props.form).find(field => Array.isArray(errors[field]) && errors[field].length > 0);
    if(!formHasErrors) this.register();
    else this.setState({submitted: true});
  }
  
  render() {
    const errors = this.state.submitted ? this.props.errors : {};
    return (
      <div>
        <PageTitle title="Registration"/>
        <RegistrationForm account={this.props.form}
                          errors={errors}
                          update={this.updateField}
                          save={this.submitForm}
                          loading={this.state.loading}/></div>
    );
  }
}

RegistrationPage.propTypes = {
  form: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

RegistrationPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  const registration = initializeForm('emailAddress', 'lastName', 'firstName', 'password', 'confirmPassword');
  let {form, errors, schema} = state.registration;
  Object.assign(registration.form, form);
  Object.assign(registration.errors, errors);
  Object.assign(registration.schema, schema, {
    confirmPassword: {
      [types.RESTRICT_VALUE]: registration.form.password,
      [types.REQUIRED]: true}});
  Object.assign(registration, {
    validation: new Validator(registration.schema)});
  return registration;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({},
    {changeRegistrationForm},
    {createAccount},
    {changeRegistrationErrors});
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
