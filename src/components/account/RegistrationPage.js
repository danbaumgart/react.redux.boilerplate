import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRegistrationValue, createAccount, validateAsync, setRegistration, setRegistrationForm} from '../../actions/registrationActions';
import Validator from '../../utils/validate';
import types from '../../utils/enums/validation';
import PageTitle from '../common/PageTitle';
import RegistrationForm from './RegistrationForm';
import debounce from '../../utils/debounce';

const hasErrors = (errors) => Object.keys(errors).filter(field => Array.isArray(errors[field]) && errors[field].length > 0).length > 0;

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.asyncValidation = debounce(this.asyncValidation, 300);
    this.register = this.register.bind(this);
  }
  
  asyncValidation() {
    validateAsync(this.props.values).then(result => result
      ? this.props.actions.setRegistration({errors: result, form: {loading: false}})
      : this.props.actions.setRegistrationForm({loading: false}));
  }
  
  updateField({target:{name, value}}) {
    if(name === 'emailAddress') {
      this.props.actions.setRegistration({errors: {}, form: {loading: true}, values: {[name]: value}});
      this.asyncValidation();
    }
    else
      this.props.actions.setRegistrationValue({name, value});
  }
  register(){
    Promise.all([
      this.props.actions.setRegistrationForm({loading: true, submitted: true}),
      this.props.actions.createAccount(this.props.values)
    ]).then(result => this.props.actions.setRegistrationForm({loading: false}));
  }
  submitForm() {
    const {values, errors, validation, actions} = this.props;
    if(!hasErrors(validation.validateForm(values)) && !hasErrors(errors))
      this.register();
    else actions.setRegistrationForm({submitted: true});
  }
  
  render(){
    const {errors, form, validation, values} = this.props;
    let loading = !!form.submitted && !!form.loading;
    const errorMessages = form.submitted ? validation.getAllDefaultErrorMessages(Object.assign({}, validation.validateForm(values), errors)) : {};
    return (
      <div>
        <PageTitle title="Registration"/>
        <RegistrationForm account={this.props.values}
                          errors={errorMessages}
                          update={this.updateField}
                          save={this.submitForm}
                          loading={loading}/>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
RegistrationPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  const {schema, values, errors, form} = state.registration;
  const validation = new Validator(Object.assign({}, schema, {
    confirmPassword:  Object.assign({}, schema.confirmPassword, {
      [types.RESTRICT_VALUE]: values.password
    })
  }));
  return {values, errors, form, validation};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},
      {createAccount},
      {setRegistrationForm},
      {setRegistrationValue},
      {setRegistration}), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
