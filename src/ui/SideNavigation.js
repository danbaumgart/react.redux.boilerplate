import React, {PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import NavigationLinkList from './NavigationLinkList';

const SideNavigation = ({title, handleToggle, open, links, handleClose}) => {
  const linkList = (<div style={{marginTop:"50px", paddingTop:'20px'}}><NavigationLinkList type={'DRAWER'} closeNavbar={handleClose} links={links}/></div>);
  return (
    <div onClick={handleClose}>
      <Drawer title={title} docked={false} width={230} open={!!open} onRequestChange={handleToggle} containerStyle={{borderRight:"2px solid rgb(86, 86, 90)"}}>
        {linkList || <div />}
      </Drawer>
    </div>
  );
};
SideNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired
};
export default SideNavigation;
