import React, {PropTypes} from 'react';
import NavigationLink from './NavigationLink';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import {Link} from 'react-router';
const menuLink = (path, name, logout)=> {
  return name.toLowerCase().includes('sign out')
    ? <MenuItem onTouchTap={logout} key={path} containerElement={<Link to={path}/>} primaryText={name} value={path} />
    : <MenuItem containerElement={<Link to={path}/>} primaryText={name} key={path} value={path} />;
};
const NavigationLinkList = ({type, links, iconButton, iconStyle, origin, logout, closeNavbar}) => {
  const print = () => console.log("CLICKED THE ICON");
  let navigationLinks;
  switch(type){
    case 'ICON':
      navigationLinks = (<IconMenu onMouseEnter={closeNavbar} iconStyle={iconStyle} iconButtonElement={<IconButton>{iconButton}</IconButton>} children={
        links.map(link => menuLink(link.path, link.name, logout))}/>);
      break;
    case 'DRAWER':
      navigationLinks =  links.map(link => <NavigationLink key={link.path} name={link.name} path={link.path}/>);
      break;
    case 'TAB':
    case 'APPBAR':
      navigationLinks = links.map(link => <NavigationLink name={link.name} key={link.path} path={link.path}/>);
      break;
    default:
      navigationLinks = links.map(link => <NavigationLink name={link.name} key={link.path} path={link.path}/>);
  }
  return <div>{navigationLinks}</div>;
};

NavigationLinkList.propTypes = {
  type: PropTypes.oneOf(['ICON', 'DRAWER', 'TAB', 'APPBAR']).isRequired,
  iconButton: PropTypes.node,
  closeNavbar: PropTypes.func.isRequired,
  iconStyle: PropTypes.object,
  links: PropTypes.array.isRequired,
  origin: PropTypes.object,
  logout: PropTypes.func
};
NavigationLinkList.defaultProps = {
  iconButton: null,
  iconStyle: null,
  type: null,
  links: [],
  origin: null
  
};


export default NavigationLinkList;
