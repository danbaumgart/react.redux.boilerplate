import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navbarActions from '../actions/navbarActions';
import AppBar from 'material-ui/AppBar';
import SideNavigation from '../ui/SideNavigation';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import NavbarDropdown from '../ui/NavbarDropdown';
import SnackbarManager from '../ui/SnackbarManager';

const changeRoute = (event) => {
  browserHistory.push(event);
};

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  
  toggleNavbar() {
    this.props.actions.toggleNavbar();
  }
  
  closeNavbar() {
    this.props.actions.closeNavbar();
  }
  
  render() {
    const title = "SPA";
    const goHome = ()=> {
      this.closeNavbar();
      changeRoute('/');
    };
    
    return (
      <div style={{backgroundColor: "rgb(215, 215, 215)", bottom: "0"}}>
        <AppBar title={<span style={{cursor: "pointer"}}>{title}</span>}
                onTitleTouchTap={goHome}
                iconElementRight={<NavbarDropdown links={this.props.userLinks} changeRoute={changeRoute}
                                                  closeNavbar={this.closeNavbar}/>}
                onRightIconButtonTouchTap={this.closeNavbar}
                style={{position: "fixed", top: "0px"}}
                onLeftIconButtonTouchTap={this.toggleNavbar}/>
        <Paper style={{marginTop: "64px", paddingBottom: "20px", display: "inline-block", width: "100%"}}
               zDepth={2}>{this.props.children}</Paper>
        <SideNavigation title={title} changeRoute={changeRoute} handleToggle={this.toggleNavbar}
                        handleClose={this.closeNavbar}
                        collapsed={this.props.collapsed} links={this.props.links}/>
        <SnackbarManager/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired,
  links: React.PropTypes.array.isRequired,
  currentLocation: React.PropTypes.string,
  userLinks: React.PropTypes.array.isRequired
};

App.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let current = ownProps.routes[1].path || '';
  current = '/' + current;
  let homeLinks = state.links.homeLinks;
  let userLinks = state.links.userLinks;
  
  return {
    loading: state.ajaxCallsInProgress > 0,
    collapsed: state.navbarCollapsed,
    links: homeLinks,
    currentLocation: current,
    userLinks: userLinks
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, navbarActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
