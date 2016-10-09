import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import PageContent from '../PageContent';
import Drawer from './Drawer';
import Header from './Header';


const Navbar = ({children, title, loading, toggle, collapsed, links, currentLocation})=> {
  const styleTheme = {
    backgroundColor: '#33374c'
  };
  const getLinks = (linkClass)=>links.map((l, i)=> {
    let linkProps = {
      to: l.path,
      activeClassName: 'is-active'
    };
    if (i == 0)
      return <IndexLink className={linkClass} {...linkProps} onClick={toggle}>{l.name}</IndexLink>;
    return <Link className={linkClass} {...linkProps} onClick={toggle}>{l.name}</Link>;
  });
  let [tabsLink, navLink] = [
    getLinks('mdl-layout__tab'),
    getLinks('mdl-navigation__link')
  ];
  let drawerClass = !collapsed ? 'mdl-layout__drawer is-visible' : 'mdl-layout__drawer';
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
      <Header title={title} links={tabsLink} styleTheme={styleTheme} loading={loading}/>
      <Drawer title={title} children={navLink}/>
      <main className="mdl-layout__content">
        <PageContent>{children}</PageContent>
      </main>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  currentLocation: PropTypes.string
};

export default Navbar;
    
      
      

