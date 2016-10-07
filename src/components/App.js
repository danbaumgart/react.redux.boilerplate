import React, {PropTypes} from 'react';
import TopNavbar from './navigation/TopNavbar';
import MdlNavbar from './navigation/MdlNavbar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navbarActions from '../actions/navbarActions';

class App extends React.Component{
  constructor(props,context){
    super(props,context);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  toggleNavbar(){
    this.props.actions.toggleNavbar();
  }
  isActive(route){
    return this.context.router.isActive(route) ? 'active' : 'active';
  }
  render(){
    const title = "SPA";
    return (
      <div>
        <MdlNavbar title={title}
                   loading={this.props.loading}
                   toggle={this.toggleNavbar}
                   currentLocation={this.props.currentLocation}
                   collapsed={this.props.collapsed}>
          {this.props.children}
        </MdlNavbar>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  collapsed:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired,
  actions:PropTypes.object.isRequired,
  currentLocation:PropTypes.string
};
App.contextTypes = {
  router: PropTypes.object
};
function mapStateToProps(state,ownProps){
  let current = ownProps.routes[1].path || '';
  current = '/' + current;
  return {
    loading: state.ajaxCallsInProgress > 0,
    collapsed:state.navbarCollapsed,
    currentLocation:current
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(navbarActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
