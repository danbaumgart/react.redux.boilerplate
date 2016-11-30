import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRegistrationValue, createAccount, validateAsync, setRegistration, setRegistrationForm} from '../../actions/registrationActions';
import Validator from '../../utils/validate';
import types from '../../enums/validation';
import {debounce, hasErrors} from '../../utils/forms';
import reformat from '../../utils/restructure';
import MaterialForm from '../../ui/MaterialForm';

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.asyncValidation = debounce(this.asyncValidation, 300);
    this.register = this.register.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
  
  asyncValidation() {
    validateAsync(this.props.values).then(result => result
      ? this.props.actions.setRegistration({errors: result, form: {loading: false}})
      : this.props.actions.setRegistrationForm({loading: false}));
  }
  
  updateField({target:{name, value = ''}}) {
    let {errors, validation, form, actions} = this.props;
    const payload = {
      values: {[name]: value},
      errors: reformat.object.removeProperties(errors, name)
    };
    if(name === 'password' && (value === '' || (form.submitted && validation.validateField(name, value).length)))
      Object.assign(payload.values, {confirmPassword: ''});
    if(validation.hasAsyncronousValidation({name})) {
      Object.assign(payload, {loading: true});
      this.asyncValidation();
    }
    actions.setRegistration(payload);
  }
  register(){
    Promise.all([
      this.props.actions.setRegistrationForm({saving: true, submitted: true}),
      this.props.actions.createAccount(this.props.values)
    ]).then(result => this.props.actions.setRegistrationForm({saving: false}));
  }
  submitForm() {
    const {values, errors, validation, actions} = this.props;
    if(!hasErrors(validation.validateForm(values)) && !hasErrors(errors))
      this.register();
    else
      actions.setRegistrationForm({submitted: true});
  }
  renderForm(){
    const {form, validation} = this.props;
    const passwordHasValue = !!this.props.values.password && this.props.values.password !== '';
    const values = passwordHasValue ? this.props.values : reformat.object.removeProperties(this.props.values);
    let errors = !form.submitted ? {} : Object.assign(validation.getAllDefaultErrorMessages(validation.validateForm(values)), this.props.errors);
    const passwordHasErrors = Array.isArray(errors.password) && errors.password.length > 0;
    let fields = this.props.fields.slice(0);
    if(!passwordHasValue || passwordHasErrors) {
      fields = fields.filter(field => field.name !== 'confirmPassword');
      errors = reformat.object.removeProperties(errors, 'confirmPassword');
    }
    errors = validation.getAllDefaultErrorMessages({errors, includeField: true});
    const loading = !!form.submitted && (!!form.loading || !!form.saving);
    return {fields, values, errors, loading};
  }
  render(){
    const {fields, values, errors, loading} = this.renderForm();
    return (
      <div>
        <MaterialForm fields={fields}
                      values={values}
                      errors={errors}
                      update={this.updateField}
                      save={this.submitForm}
                      loading={loading}
                      title="Registration"
                      submitLabel="Register"/>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  values: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
RegistrationPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  const {schema, values, errors, form, fields} = state.registration;
  const enhancedSchema = Object.assign({}, schema, {confirmPassword:  Object.assign({}, schema.confirmPassword, {[types.RESTRICT_VALUE]: values.password})});
  const validation = new Validator(enhancedSchema, 'emailAddress');
  return {values, errors, form, validation, fields};
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
