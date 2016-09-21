import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from '../common/LoadingDots';

const TopNavbar = ({title, loading, toggle,collapsed})=> {
  return (<div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" onClick={toggle}>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <Link className="navbar-brand" to="/">{title}</Link>
        </div>
        <div className={collapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse in'} >
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home<span className="sr-only">(current)</span></IndexLink></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/log" activeClassName="active">Log</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/log" activeClassName="active">User</Link></li>
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
  toggle:PropTypes.func.isRequired
};


export default TopNavbar;
    
      
      

