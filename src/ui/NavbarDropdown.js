import React, {PropTypes} from 'react';
import {IconMenu, MenuItem, IconButton, Menu} from 'material-ui';
import {SocialPerson, SocialPersonOutline} from 'material-ui/svg-icons/index'
import {Link} from 'react-router';

const menuLink = ({path, name})=><MenuItem containerElement={<Link to={path}/>} key={path} primaryText={name} value={path} />;

const NavbarDropdown = ({links, closeNavbar, changeRoute, user, logout}) => {
  let isLoggedIn = user.timestamp && user.timestamp - new Date() > 0;
  let userLinks = isLoggedIn ? links.filter(i => !i.name.toLowerCase().includes('sign in') && !i.name.toLowerCase().includes('register')) : links.filter(i => !i.name.toLowerCase().includes('sign out'));
  const linkList = userLinks.map(link => link.name.toLowerCase().includes('sign out') ? <MenuItem onTouchTap={logout} key={link.path} primaryText={link.name} /> : menuLink(link));
  console.log("LINK LIST", linkList);
  const iconButton = isLoggedIn ? <SocialPerson/> : <SocialPersonOutline/>;
  return (
    <IconMenu
      iconButtonElement={<IconButton>{iconButton}</IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      iconStyle={{color:"white"}}
      onItemTouchTap={closeNavbar}
      targetOrigin={{horizontal: 'right', vertical: 'top'}} children={linkList}/>
  );
};

NavbarDropdown.propTypes = {
  links: PropTypes.array.isRequired,
  changeRoute: PropTypes.func.isRequired,
  closeNavbar: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};
export default NavbarDropdown;
