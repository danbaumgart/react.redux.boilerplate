import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormInput from '../common/FormInput';
import * as accountActions from '../../actions/accountActions';
import * as Condition from '../../actions/validTypes';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      account: {
        username: '',
        password: '',
        first: '',
        last: ''
      },
      loading: false,
      submitted: false,
      errors: {
        username: [],
        password: [],
        first: [],
        last: []
      }
    };
    this.updateField = this.updateField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validate = this.validate.bind(this);
  }
  onSubmitForm(){
    this.setState({
      submitted:true
    });
  }
  updateField(event){
    let input = {[event.target.name]: event.target.value};
    console.log(input);
    this.validate(event.target.name, event.target.value);
    this.setState({
      account: Object.assign({},this.state.account,input)
    });
  }
  validate(key,input){
    let condition = Condition.Validator(input);
    let err = [];
    Object.keys(this.props.schema[key]).forEach(k=>{
      let requirement = k.toUpperCase();
      let result;
      console.log("CONDITION", condition);
      switch(requirement){
        case Condition.MINIMUM:
          console.log(requirement);
          break;
        case Condition.MAXIMUM:
          console.log(requirement);
          break;
        case Condition.RESTRICT:
          console.log(requirement);
          break;
        default:
          result = condition[requirement]();
          console.log(requirement,result);
          if(!result) err.push(requirement);
          break;
      }
    });
    console.log("ERRORS", err);
    this.setState({
      errors:Object.assign({},this.state.errors,{[key]:err})
    });
  }
  validateForm(key){
    const input = this.state.account[key];
    let errors = [];
    switch(key){
      case 'email':
        if(input === '')
          errors.push('required field.');
        if(input.indexOf('@') === -1)
          errors.push('invalid email.');
        break;
      case 'last':
        if(input === '')
          errors.push('required field.');
        if(input.length < 6)
          errors.push('must be at least 6 characters long');
        break;
      default:
        break;
    }
    return errors;
  }
  
  render(){
    console.log("ACCOUNT",this.state.account);
    console.log("ERRORS",this.state.errors);
    return (
      <form className="form-horizontal">
        <FormInput label="Email Address"
                   name="username"
                   placeholder="Enter your email address"
                   value={this.state.account.username}
                   type="email"
                   errors={this.state.errors.username}
                   onChange={this.updateField} />
        <FormInput label="First Name"
                   name="first"
                   placeholder="Enter your first name"
                   value={this.state.account.first}
                   errors={this.state.errors.first}
                   onChange={this.updateField} />
        <FormInput label="Last Name"
                   name="last"
                   placeholder="Enter your last name"
                   value={this.state.account.last}
                   errors={this.state.errors.last}
                   onChange={this.updateField} />
        <FormInput label="Password"
                   name="password"
                   placeholder="Enter your password"
                   value={this.state.account.password}
                   type="password"
                   errors={this.state.errors.password}
                   onChange={this.updateField} />
      </form>
    );
  }
}

AccountPage.propTypes = {
  schema: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  const schema = {};
  if(state.schema.account) {
    Object.assign(schema, state.schema.account);
  }
  return {
    schema: schema
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
