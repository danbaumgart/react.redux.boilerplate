import React, {PropTypes} from 'react';
import TopNavbar from './navigation/TopNavbar';
import Navbar from './navigation/mdl/Navbar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navbarActions from '../actions/navbarActions';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui/svg-icons/social/person';
import SideNav from '../ui/SideNav';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';

const changeRoute = (event) => {
    browserHistory.push(event);
  };

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.isActive = this.isActive.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    //this.changeRoute = this.changeRoute.bind(this);
  }
  
  toggleNavbar() {
    this.props.actions.toggleNavbar();
  }
  
  closeNavbar() {
    this.props.actions.closeNavbar();
  }
  
  isActive(route) {
    return this.context.router.isActive(route) ? 'active' : 'active';
  }
  
  render() {
    const title = "SPA";
    const goToAccountPage = ()=>{
      this.closeNavbar();
      changeRoute('/account');
    };
    const goHome = ()=>{
      this.closeNavbar();
      changeRoute('/');
    };
    return (
      <div style={{backgroundColor: "rgb(225, 225, 225)"}}>
        <AppBar title={<span style={{cursor: "pointer"}}>{title}</span>}
                onTitleTouchTap={goHome}
                
                
                iconElementRight={<IconButton><Person/></IconButton>}
                onRightIconButtonTouchTap={goToAccountPage}
                style={{position:"fixed", top:"0px"}}
                onLeftIconButtonTouchTap={this.toggleNavbar}/>
        <Paper style={{marginTop:"64px"}} zDepth={2}>{this.props.children}</Paper>
        <SideNav title={title} changeRoute={changeRoute} handleToggle={this.toggleNavbar} handleClose={this.closeNavbar}
                 collapsed={this.props.collapsed} links={this.props.links} />
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  collapsed: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  currentLocation: PropTypes.string
};
App.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let current = ownProps.routes[1].path || '';
  current = '/' + current;
  let links = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/courses', name: 'Courses'},
    {path: '/log', name: 'Log'},
    {path: '/account', name: 'Account'}
  ];
  
  
  return {
    loading: state.ajaxCallsInProgress > 0,
    collapsed: state.navbarCollapsed,
    links: links,
    currentLocation: current
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navbarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
