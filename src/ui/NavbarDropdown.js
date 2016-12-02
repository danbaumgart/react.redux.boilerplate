import React, {PropTypes} from 'react';
import {IconButton} from 'material-ui';
import {SocialPerson, SocialPersonOutline} from 'material-ui/svg-icons/index'
import NavigationLinkList from './NavigationLinkList';

const filterUserLinks = (links, isLoggedIn) => isLoggedIn
  ? links.filter(i => !i.name.toLowerCase().includes('sign in') && !i.name.toLowerCase().includes('register'))
  : links.filter(i => !i.name.toLowerCase().includes('sign out'));


const NavbarDropdown = ({links, closeNavbar, changeRoute, user, logout}) => {
  let isLoggedIn = user.timestamp && user.timestamp - new Date() > 0;
  const userLinks = filterUserLinks(links, isLoggedIn, logout);
 const iconButton = isLoggedIn ? <SocialPerson/> : <SocialPersonOutline/>;
  return (
    <NavigationLinkList
      closeNavbar={closeNavbar}
      iconStyle={{color: "white"}}
      origin={{horizontal: 'right', vertical: 'top'}}
      iconButton={iconButton}
      logout={logout}
      type="ICON"
      links={userLinks}/>);
};

NavbarDropdown.propTypes = {
  links: PropTypes.array.isRequired,
  changeRoute: PropTypes.func.isRequired,
  closeNavbar: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};
export default NavbarDropdown;
