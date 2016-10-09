import React, {PropTypes} from 'react';

const Drawer = ({children, title}) => {
  
  return (<div className="mdl-layout__drawer">
      <span className="mdl-layout-title">{title}</span>
      <nav className="mdl-navigation">
        {children}
      </nav>
    </div>
  );
};

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};


export default Drawer;
