import React, {PropTypes} from 'react';
import * as accountActions from '../../actions/accountActions';
import {connect} from 'react-redux';
import {schema} from '../../mock/db/accounts';
import PageTitle from '../common/PageTitle';
import {bindActionCreators} from 'redux';
import RegistrationForm from './RegistrationForm';
import {validationTypes as types} from '../../utils/validate';
import Validator from '../../utils/validate';
import toastr from 'toastr';
import Snackbar from 'material-ui/Snackbar';


class RegistrationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {errors = {}, touched = {}} = {};
    Object.keys(this.props.account).forEach(key => {
      Object.assign(errors, {[key]: []});
      Object.assign(touched, {[key]: false});
    });
    this.state = {
      errors: errors,
      touched: touched,
      submitted: false,
      loading: false,
      showSnackbar: false,
      snackbarMessage: []
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.register = this.register.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.timer = undefined;
  }
  
  updateField(event) {
    let {name, value} = event.target;
    let payload = Object.assign({}, this.props.account, {[name]: value});
    this.props.actions.updateAccountForm(payload);
    let validationErrors = this.props.validation.validateField(name, value);
    this.setState({
      touched: Object.assign({}, this.state.touched, {[name]: true}),
      errors: Object.assign({}, this.state.errors, {[name]: validationErrors})
    });
  }
  
  handleSuccess({payload}) {
    toastr.success(`account ${payload.emailAddress} was created successfully`, 'Registration Complete');
    this.setState({loading: false});
  }
  
  handleErrors(errors) {
    const err = Object.assign({}, this.state.errors, errors);
    let arr = ["hello","goodbye","see ya","adios"];
    // Object.keys(errors).forEach(field => {
    //   if(Array.isArray(errors[field]) && errors[field].length > 0)
    //     arr.push([...errors[field]])
    // });
    this.setState({
      loading: false,
      errors: err
    });
    arr.forEach((m, i) => setTimeout(iter =>
      this.setState({
        snackbarMessage: <div key={iter}>{iter}</div>,
        showSnackbar : true
      }), i > 0 ? 1500: 0));
  }
  
  handleRequestClose() {
    this.setState({showSnackbar: false});
  }
  
  register() {
    this.setState({loading: true});
    this.props.actions.createAccount(this.props.account)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }
  
  submitForm() {
    const errors = this.props.validation.validateForm(this.props.account);
    if (!Object.keys(errors).length)
      this.register();
    else
      this.setState({
        submitted: true,
        errors: errors
      });
  }
  render() {
    const errors = {};
    console.log("SNACK", this.state);
    if (this.state.submitted)
      Object.assign(errors, this.state.errors);
    console.log("SNACKBAR", this.state.snackbarMessage);
    return (
      <div>
        <PageTitle title="Registration"/>
        <RegistrationForm account={this.props.account} errors={errors} update={this.updateField}
                          save={this.submitForm} loading={this.state.loading}/>
        <Snackbar message={this.state.snackbarMessage}
                  open={this.state.showSnackbar}
                  onRequestClose={this.handleRequestClose}
                  autoHideDuration={1600} />
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  account: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object
};
RegistrationPage.defaultProps = {
  validation: {}
};

function mapStateToProps(state) {
  const registration = Object.assign({}, {
    emailAddress: '',
    lastName: '',
    firstName: '',
    password: '',
    confirmPassword: ''
  }, state.account);
  const criteria = Object.assign({},
    schema,
    {
      confirmPassword: Object.assign({},
        {[types.REQUIRED]: true},
        {[types.RESTRICT_VALUE]: state.account.password})
    });
  
  return {
    account: registration,
    validation: new Validator(criteria)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
