import React, {PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideNavigation = ({title, handleToggle, collapsed, links, changeRoute, handleClose}) => {
  let sideLinks = links.map(link => <MenuItem key={link.path} onTouchTap={()=>changeRoute(link['path'])}>{link.name}</MenuItem>);
  return (
    <div onClick={handleClose}>
      <Drawer title={title} docked={false} width={230} open={!collapsed} onRequestChange={handleToggle} containerStyle={{borderRight:"2px solid rgb(86, 86, 90)"}}>
        <div style={{marginTop:"50px", paddingTop:'20px'}}>
        {links.map(link => <MenuItem key={link.path} onTouchTap={()=>changeRoute(link['path'])}>{link.name}</MenuItem>)}
        </div>
      </Drawer>
    </div>
  );
};
SideNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  changeRoute: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};
export default SideNavigation;
