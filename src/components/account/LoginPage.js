import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PageTitle from '../common/PageTitle';
import * as accountActions from '../../actions/loginActions';
import Validator from '../../utils/validate';
import toastr from 'toastr';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
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
    this.props.actions.loginAccount(this.props.user)
      .then((result)=> {
      this.setState({saving:false});
      toastr.success("Login Success" + result);
    }).catch((errors)=>{
      this.setState({saving:false});
      let err = Object.keys(errors).map(i=>{return {field: i, errors: errors[i]};});
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
    let dirty = Object.keys(this.props.user).filter(i=>this.props.user[i] !== '');
    let fieldIsAlreadyDirty = dirty.indexOf(name) !== -1;
    
    this.setState({
      touched: fieldIsAlreadyDirty ? dirty : [...dirty, name]
    });
    let payload = Object.assign({}, this.props.user, {[name]: value});
    this.props.actions.updateLoginForm(payload);
  }
  render() {
    let fieldsToValidate = {};
    this.state.touched.forEach(field => fieldsToValidate[field] = this.props.user[field]);
    const fieldErrors = this.props.validation.validateForm(fieldsToValidate);
    const errors = {};
    if(this.state.submitted)
      Object.assign(errors, fieldErrors);
    return (
      <div>
        <PageTitle title="Login" />
        <LoginForm user={this.props.user} errors={errors} update={this.updateField} save={this.onSubmitForm} saving={this.state.saving} />
      </div>
    );
  }
}


LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  validation: PropTypes.object
};
LoginPage.defaultProps = {
  validation: {}
};
function mapStateToProps(state, ownProps) {
  const userForm = {
    username: '',
    password: '',
    rememberMe: false
  };
  let validation = new Validator({username:{required:true}},{password:{required:true}});
  Object.assign(userForm,state.login);
  return {
    user: userForm,
    validation: validation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
