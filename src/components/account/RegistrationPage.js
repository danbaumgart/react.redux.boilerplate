import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {
//   createAccount,
//   checkAvailability,
// updateRegistrationErrors,
// updateRegistrationForm,
// addRegistrationErrors,
// removeRegistrationErrors,
//   updateRegistrationField
import * as actions from '../../actions/registrationActions';
import Validator from '../../utils/validate';
import types from '../../utils/enums/validation';
import PageTitle from '../common/PageTitle';
import {initializeForm} from '../../utils/forms';
import {schema} from '../../mock/db/accounts';
import RegistrationForm from './RegistrationForm';
import debounce from '../../utils/debounce';

class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      submitted: false,
      loading: false,
      errors: {}
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateAsync = debounce(this.validateAsync, 500);
  }
  validateAsync(){
    if(Object.keys(this.state.errors).length)
      this.setState({errors:{}});
    actions.validateAsync(this.props.form).then(result => {
      if(result)
        this.setState({errors: Object.assign({}, this.state.errors, result)});
      else if(this.state.errors.emailAddress)
        this.setState({errors: {}});
    });
  }
  updateField({target:{name, value}}) {
    this.props.actions.changeRegistrationField({name, value});
    if(name === 'emailAddress'){
      if(Array.isArray(this.state.errors.emailAddress))
        this.setState({errors: {}});
      this.validateAsync();
    }
  }
  
  submitForm() {
    this.setState({submitted: true});
  }
  
  render() {
    console.log('render');
    const errors = Object.assign({}, new Validator(this.props.schema).validateForm(this.props.form), this.state.errors);
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
  errors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

RegistrationPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return state.registration;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
