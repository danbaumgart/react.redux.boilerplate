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
    // this.state = {
    //   showSnackbar: false,
    //   message: this.props.messages.slice(0),
    //   successful: false
    // };
    this.closeNavbar = this.closeNavbar.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    //this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  
  toggleNavbar() {
    this.props.actions.toggleNavbar();
  }
  
  closeNavbar() {
    this.props.actions.closeNavbar();
  }
  
  // handleRequestClose() {
  //   if (this.state.message.length === 1) {
  //     console.log("DONE SHOWING TOASTER");
  //     this.setState({
  //       showSnackbar: false,
  //       message: []
  //     });
  //   } else {
  //     console.log("JUST GETTING STARTED");
  //     this.setState({
  //       showSnackbar: true,
  //       message: this.state.message.slice(1)
  //     });
  //   }
  // }
  //
  render() {
    const title = "SPA";
    const goHome = ()=> {
      this.closeNavbar();
      changeRoute('/');
    };
    // let message = <span>{this.state.message[0]}</span>;
    // console.log(this.state.successful);
    // const snackbarStyle = Object.assign({},
    //   {textAlign: 'center'},
    //   {fontWeight: "800"});
    // let successAlert = !!this.state.successful;
    // console.log("SUCCESS ALERT?", successAlert);
    // Object.assign(snackbarStyle,
    //   {color: successAlert ? 'rgba(0,220,67)' : 'rgba(220,67,67)'});
    
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
  // messages: React.PropTypes.array.isRequired,
  // successful: React.PropTypes.bool
};
// App.defaultProps = {
//   successful: false
// };
App.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let current = ownProps.routes[1].path || '';
  current = '/' + current;
  //console.log(current);
  let homeLinks = state.links.homeLinks;
  let userLinks = state.links.userLinks;
  // const alerts = Object.assign({},
  //   {messages: state.alerts.messages || []},
  //   {successful: !!state.alerts.successful});
  return {
    loading: state.ajaxCallsInProgress > 0,
    collapsed: state.navbarCollapsed,
    links: homeLinks,
    currentLocation: current,
    userLinks: userLinks
    // messages: alerts.messages,
    // successful: alerts.successful
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, navbarActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
