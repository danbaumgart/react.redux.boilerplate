import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import PageContent from './PageContent';
import LoadingDots from '../common/LoadingDots';
const getLinks = (linkClass)=>{
  return [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/courses', name: 'Courses'},
    {path: '/log', name: 'Log'},
    {path: '/account', name: 'Account'}
  ].map((l, i)=> {
    let linkProps = {
      to: l.path,
      activeClassName: 'is-active'
    };
    if (i == 0)
      return <IndexLink className={linkClass} {...linkProps}>{l.name}</IndexLink>;
    return <Link className={linkClass} {...linkProps}>{l.name}</Link>;
  });
};

const MdlNavbar = ({children, title, loading, toggle, collapsed, currentLocation})=> {
  const styleTheme = {
    backgroundColor: '#33374c'
  };
  let [tabsLink, navLink] = [getLinks('mdl-layout__tab'), getLinks('mdl-navigation__link')];
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
      <header className="mdl-layout__header" style={styleTheme}>
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect "  style={styleTheme}>
          {tabsLink}
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">{title}</span>
        <nav className="mdl-navigation">
          {navLink}
        </nav>
      </div>
      <main className="mdl-layout__content">
        <PageContent>{children}</PageContent>
      </main>
    </div>
  );
};

MdlNavbar.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  currentLocation: PropTypes.string
};

export default MdlNavbar;
    
      
      

