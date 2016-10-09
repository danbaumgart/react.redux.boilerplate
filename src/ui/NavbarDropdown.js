import React, {PropTypes} from 'react';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

const NavbarDropdown = ({links, closeNavbar, changeRoute}) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><Person /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      iconStyle={{color:"white"}}
      onItemTouchTap={closeNavbar}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}>
      {links.map(link=><MenuItem primaryText={link.name} key={link.path} onTouchTap={()=>changeRoute(link.path)}/>)}
    </IconMenu>
  );
};

NavbarDropdown.propTypes = {
  links: PropTypes.array.isRequired,
  changeRoute: PropTypes.func.isRequired,
  closeNavbar: PropTypes.func.isRequired
};

export default NavbarDropdown;
