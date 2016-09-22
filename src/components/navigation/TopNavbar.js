import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from '../common/LoadingDots';

const TopNavbar = ({title, loading, toggle,collapsed, currentLocation})=> {
  const Links = [
    {path: '/', name:'Home'},
    {path: '/about', name: 'About'},
    {path: '/courses', name:'Courses'},
    {path: '/log',name: 'Log'}
    ].map((l,i)=>{
    let linkProps = {
      to:l.path,
      activeClassName:'active',
      onClick:toggle
    };
    let indexProps = {
      className: l.path === currentLocation ? 'active' : '',
      key: i
    };
      if(i==0)
        return <li {...indexProps}><IndexLink {...linkProps}>{l.name}</IndexLink></li>;
      return <li {...indexProps}><Link {...linkProps}>{l.name}</Link></li>;
    });
  return (<div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" onClick={toggle}>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <Link className="navbar-brand" to="/"  onClick={!collapsed ? toggle : ()=>{}}>{title}</Link>
        </div>
        <div className={collapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse in'} >
          <ul className="nav navbar-nav">
            {Links}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className={currentLocation == '/account' ? 'active' : ''}><Link to="/account" activeClassName="active" onClick={toggle}>Account</Link></li>
            {loading && <li><LoadingDots inverse={true} interval={100} dots={20}/></li>}
          </ul>
        </div>
      </div>
    </nav>
  </div>);
};

TopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  loading:PropTypes.bool.isRequired,
  collapsed:PropTypes.bool.isRequired,
  toggle:PropTypes.func.isRequired,
  currentLocation: PropTypes.string
};


export default TopNavbar;
    
      
      

