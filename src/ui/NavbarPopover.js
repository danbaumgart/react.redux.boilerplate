import React, {PropTypes} from 'react';
import {Popover, MenuItem, IconButton} from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

const NavbarPopover = ({links, changeRoute, anchorEl}) => {
  return (<div>
    <Popover anchorEl={anchorEl}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      iconStyle={{color:"white"}}
      onItemTouchTap={()=>{}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}>
      {links.map(link=><MenuItem primaryText={link.name} key={link.path} onTouchTap={()=>changeRoute(link.path)}/>)}
    </Popover>
    </div>
  );
};

NavbarPopover.propTypes = {
  links: PropTypes.array.isRequired,
  changeRoute: PropTypes.func.isRequired,
  anchorEl: PropTypes.object.isRequired
};

export default NavbarPopover;
