import React, {PropTypes} from 'react';
import RegistrationForm from './RegistrationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormInput from '../common/FormInput';
import PageTitle from '../common/PageTitle';
import * as accountActions from '../../actions/accountActions';
import Validator from '../../utils/validate';
import toastr from 'toastr';
import {validationTypes as types} from '../../utils/validate';
import MaterialUiForm from './MaterialUiForm';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      saving: false,
      submitted: false,
      touched: [],
      errors: {}
    };
    this.updateField = this.updateField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  
  onSubmitForm(event) {
    console.log(event);
    this.setState({
      saving: true,
      submitted: true
    });
    let errors = this.props.validation.validateForm(this.props.account);
    if(!errors) {
      this.props.actions.createAccount(this.props.account)
        .then((result)=> {
          this.setState({saving: false});
          toastr.success("Registration Success" + result);
        }).catch((errors)=> {
        this.setState({saving: false});
        let err = Object.keys(errors).map(i=> {
          return {field: i, errors: errors[i]};
        });
        err.forEach(e=> {
          if (e.errors && Array.isArray(e.errors)) {
            let message = e.errors[0];
            e.errors.slice(1).forEach(m => message += '<br/>' + m);
            toastr.error(message, e.field);
          }
        });
      });
    } else {
      this.setState({
        saving: false,
        errors: errors
      });
    }
  }
  
  updateField(event) {
    let {name, value} = event.target;
    console.log(this.state.errors);
    let dirty = Object.keys(this.props.account).filter(i=>this.props.account[i] !== '');
    let fieldIsAlreadyDirty = dirty.indexOf(name) !== -1;
    
    this.setState({
      touched: fieldIsAlreadyDirty ? dirty : [...dirty, name]
    });
    let payload = Object.assign({}, this.props.account, {[name]: value});
    this.props.actions.updateAccountForm(payload);
  }
  render() {
    let fieldsToValidate = {};
    this.state.touched.forEach(key => Object.assign(fieldsToValidate, {[key]: this.props.account[key]}));
    this.props.validation.requiredKeys().forEach(field => Object.assign(fieldsToValidate, {[field] : this.props.account[field]}));
    const fieldErrors = this.props.validation.validateForm(fieldsToValidate);
    const errors = {};
    if((this.props.validateOn === 'submit' && this.state.submitted) || this.props.validateOn === 'change')
      Object.assign(errors, fieldErrors);
    let saving = this.state.saving;
    return (
      <div>
        <PageTitle title="Registration" />
        <RegistrationForm account={this.props.account}
                          errors={errors}
                          update={this.updateField}
                          save={this.onSubmitForm}
                          loading={saving} />
      </div>
    );
  }
}


AccountPage.propTypes = {
  account: PropTypes.object.isRequired,
  dirty: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object,
  validateOn: PropTypes.oneOf(['submit','change'])
};

AccountPage.defaultProps = {
  validation: {}
}
function mapStateToProps(state, ownProps) {
  const accountForm = {
    emailAddress: '',
    lastName: '',
    firstName: '',
    password: '',
    confirmPassword: ''
  };
  const schema = {};
  Object.assign(accountForm,state.account);
  if(state.schema.hasOwnProperty('account'))
    Object.assign(schema,
      state.schema.account,
      {confirmPassword: Object.assign({},
        {[types.REQUIRED]: true},
        {[types.RESTRICT_VALUE]: state.account.password}
      )});
  let validation = new Validator(schema);
  return {
    dirty: state.account,
    account: accountForm,
    validation: validation,
    validateOn: 'submit'
    //touched: fieldsToUpdate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
