import React, {PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {MenuItem, Menu} from 'material-ui';
import NavigationLink from './NavigationLink';
const SideNavigation = ({title, handleToggle, collapsed, links, changeRoute, handleClose}) => {
  //const linkList = <Menu onItemTouchTap={changeRoute}>{links.map(link => <MenuItem  key={link.path} primaryText={link.name} value={link.path} />)}</Menu>;
  const linkList = links.map(link => <NavigationLink name={link.name} path={link.path} key={link.path}/>);
  return (
    <div onClick={handleClose}>
      <Drawer title={title} docked={false} width={230} open={!collapsed} onRequestChange={handleToggle} containerStyle={{borderRight:"2px solid rgb(86, 86, 90)"}}>
        <div style={{marginTop:"50px", paddingTop:'20px'}}>
          {linkList}
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
