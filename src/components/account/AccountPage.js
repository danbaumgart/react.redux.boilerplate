import React, {PropTypes} from 'react';
import RegistrationForm from './RegistrationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormInput from '../common/FormInput';
import * as accountActions from '../../actions/accountActions';
import Validator from '../../utils/validate';
import toastr from 'toastr';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      saving: false,
      submitted: false,
      touched: []
    };
    this.updateField = this.updateField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  
  onSubmitForm(event) {
    event.preventDefault();
    this.setState({
      saving: true,
      submitted: true
    });
    this.props.actions.createAccount(this.props.account)
      .then((result)=> {
      this.setState({saving:false});
      toastr.success("Registration Success" + result);
    }).catch((errors)=>{
      this.setState({saving:false});
      let err = Object.keys(errors).map(i=>{return {field: i, errors: errors[i]};});
      console.log("ERRORS", err);
      err.forEach(e=>{
        if(e.errors && Array.isArray(e.errors)) {
          let message = e.errors[0];
          e.errors.slice(1).forEach(m => message += '<br/>' + m);
          toastr.error(message, e.field);
        }
      });
    });
    
  }
  
  updateField(event) {
    let {name, value} = event.target;
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
    this.state.touched.forEach(field => fieldsToValidate[field] = this.props.account[field]);
    let errors = this.props.validateOn !== 'submit' || this.state.submitted ?
      this.props.validation.validateForm(fieldsToValidate) : {};
    return (
      <div>
        <RegistrationForm account={this.props.account} errors={errors} update={this.updateField} save={this.onSubmitForm} saving={this.state.saving} />
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
  //touched: PropTypes.array
};

AccountPage.defaultProps = {
  validation: {}//,
  //touched: []
}
function mapStateToProps(state, ownProps) {
  const accountForm = {
    username: '',
    last: '',
    first: '',
    password: '',
    confirmPassword: ''
  };
  const schema = {};
  Object.assign(accountForm,state.account);
  if(state.schema.hasOwnProperty('account'))
    Object.assign(schema,
      state.schema.account,
      {
        confirmPassword:{
          required: true,
          restrict:{
            value: accountForm.password
          }
        }
      }
    );
  // let fieldsToUpdate = Object.keys(accountForm).map(i=>{
  //   if(accountForm[i] !== '')
  //     return i;
  // });
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
