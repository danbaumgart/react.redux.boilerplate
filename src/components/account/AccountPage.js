import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
import * as accountActions from '../../actions/accountActions';

class AccountPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <form>
        <TextInput label="Username" name="username" placeholder="Enter your username..." onChange={()=>{}} />
        <TextInput label="Password" name="password" placeholder="Enter your password..." onChange={()=>{}} />
        <SubmitButton label="Login" onSave={this.props.actions.login}/>
      </form>
    );
  }
}

AccountPage.propTypes = {
  actions:PropTypes.object
};

AccountPage.contextTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    actions:PropTypes.object.isRequired
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
