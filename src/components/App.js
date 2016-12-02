import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navbarActions from '../actions/navbarActions';
import AppBar from 'material-ui/AppBar';
import SideNavigation from '../ui/SideNavigation';
import {browserHistory} from 'react-router';
import {Paper, IconButton} from 'material-ui';
import NavbarDropdown from '../ui/NavbarDropdown';
import {logoutAccount} from '../actions/loginActions'
import SnackbarManager from '../ui/SnackbarManager';
import {NavigationMenu} from 'material-ui/svg-icons/index';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.goHome = this.goHome.bind(this);
    this.openNavbar = this.openNavbar.bind(this);
    this.logout = this.logout.bind(this);
  }
  changeRoute(event, menuItem){
    const {props:{value: path}} = menuItem;
    browserHistory.push(path);
  }
  logout(){
    this.props.actions.logoutAccount();
  }
  openNavbar(){
    this.props.action.openNavbar();
  }
  toggleNavbar() {
    this.props.actions.toggleNavbar();
  }
  
  closeNavbar() {
    if(!this.props.collapsed)
      this.props.actions.closeNavbar();
  }
  goHome(){
    this.closeNavbar();
    browserHistory.push(this.props.links.find(link => link.name.toLowerCase() === 'home'));
  }
  render() {
    const navmenuIcon = <IconButton onMouseEnter={this.props.actions.openNavbar}><NavigationMenu/></IconButton>;
    const title = <span style={{cursor: "pointer"}}>{this.props.title}</span>;
    const {appBar: appBarStyle, paper: paperStyle, container: containerStyle} = {
      paper: {
        marginTop: "64px", paddingBottom: "20px", display: "inline-block", width: "100%"
      },
      container: {
        backgroundColor: "rgb(215, 215, 215)", bottom: "0"
      },
      appBar: {
        position: "fixed", top: "0"
      }
    };
    const accountBar = <NavbarDropdown logout={this.logout} user={this.props.user} links={this.props.userLinks} changeRoute={this.changeRoute} closeNavbar={this.closeNavbar} />;
    
    return (
      <div style={containerStyle}>
        <AppBar title={title}
                iconElementLeft={navmenuIcon}
                onTitleTouchTap={this.goHome}
                iconElementRight={accountBar}
                onRightIconButtonTouchTap={this.closeNavbar}
                style={appBarStyle}
                onLeftIconButtonTouchTap={this.toggleNavbar}/>
        <Paper style={paperStyle} zDepth={2}>{this.props.children}</Paper>
        <SideNavigation title={this.props.title} changeRoute={this.changeRoute} handleToggle={this.toggleNavbar}
                        handleClose={this.closeNavbar}
                        open={this.props.open} links={this.props.links}/>
        <SnackbarManager/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  currentLocation: PropTypes.string,
  userLinks: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  title: PropTypes.string
};
App.defaultProps = {
  title: "SINGLE PAGE APPLICATION"
};
App.contextTypes = {
  router: PropTypes.object,
};


function mapStateToProps(state, ownProps) {
  const {links:{userLinks, homeLinks}, navbarOpen, ajaxCallsInProgress, user, title} = state;
  let current = '/' + (ownProps.routes[1].path || '');
  return {
    loading: ajaxCallsInProgress > 0,
    open: navbarOpen,
    links: homeLinks,
    currentLocation: current,
    userLinks: userLinks,
    user: user,
    title: title
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, navbarActions, {logoutAccount}), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
