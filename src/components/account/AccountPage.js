import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormInput from '../common/FormInput';
import * as accountActions from '../../actions/accountActions';
import Validator from '../../utils/validate';
import * as types from '../../utils/enums/validation';
import {schema} from '../../mock/db/accounts';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      submitted: false
    };
    this.updateField = this.updateField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  
  onSubmitForm() {
    this.setState({
      submitted: true
    });
  }
  
  updateField(event) {
    let {name, value} = event.target;
    this.props.actions.updateAccountField({[event.target.name]: event.target.value});
    //let errors = this.props.validation.validateField(name, value);
  }
  
  render() {
    let errors = this.props.validation.validateForm(this.props.dirty);
    return (
      <form className="form-horizontal">
        <FormInput label="Email Address"
                   name="username"
                   placeholder="Enter your email address"
                   value={this.props.account.username}
                   type="email"
                   errors={errors.username}
                   onChange={this.updateField}/>
        <FormInput label="First Name"
                   name="first"
                   placeholder="Enter your first name"
                   value={this.props.account.first}
                   errors={errors.first}
                   onChange={this.updateField}/>
        <FormInput label="Last Name"
                   name="last"
                   placeholder="Enter your last name"
                   value={this.props.account.last}
                   errors={errors.last}
                   onChange={this.updateField}/>
        <FormInput label="Password"
                   name="password"
                   placeholder="Enter your password"
                   value={this.props.account.password}
                   type="password"
                   errors={errors.password}
                   onChange={this.updateField}/>
        <FormInput label="Confirm Password"
                   name="confirmPassword"
                   placeholder="Enter your password"
                   value={this.props.account.confirmPassword}
                   type="password"
                   errors={errors.confirmPassword}
                   onChange={this.updateField}/>
      </form>
    );
  }
}


AccountPage.propTypes = {
  account: PropTypes.object.isRequired,
  dirty: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object,
};


function mapStateToProps(state, ownProps) {
  const accountForm = {
    username: '',
    last: '',
    first: '',
    password: '',
    confirmPassword: ''
  };
  const schema = {};
  // Object.keys(state.account).forEach(key => {
  //   accountForm[key] = state.account[key];
  // });
  Object.assign(accountForm,state.account);
  if(state.schema.hasOwnProperty('account'))
    Object.assign(schema,
      state.schema.account,
      {
        confirmPassword:{
          restrict:{
            value: accountForm.password
          }
        }
      }
    );
  let validation = new Validator(schema);
  return {
    dirty: state.account,
    account: accountForm,
    validation: validation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
