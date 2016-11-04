import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  createAccount,
  checkAvailability,
updateRegistrationErrors,
updateRegistrationForm,
  updateRegistrationField
} from '../../actions/registrationActions';
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
      loading: false
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateAsync = debounce(this.validateAsync, 1000)
  }
  
  validateAsync(value) {
    checkAvailability(value).then(result => {
      if (result) {
          Object.assign({}, this.state.errors);
        this.setState({})
      }
    });
  }
  
  updateField({target:{name, value}}) {
    this.props.actions.updateRegistrationField({name, value});
    this.props.actions.updateRegistrationErrors({name, value, validator: new Validator(this.props.schema)});
  }
  
  submitForm() {
    // if (Object.keys(this.state.errors).find(key => this.state.errors[key].length > 0)) Promise.all([
    //   Promise.resolve(this.setState({loading: true, submitted: true})),
    //   this.props.actions.createAccount(this.props.form)
    // ]).then(res => console.log(res));
    this.setState({submitted: true});
  }
  
  render() {
    const errors = this.props.errors;
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
  const actions = Object.assign({},
    {updateRegistrationField},
    {updateRegistrationForm},
    {updateRegistrationErrors},
    {checkAvailability},
    {createAccount});
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
