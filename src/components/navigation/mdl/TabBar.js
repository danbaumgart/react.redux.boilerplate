import React, {PropTypes} from 'react';

const TabBar = ({links, styleTheme}) => {
  return (
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect "  style={styleTheme}>
      {links}
    </div>
  );
};

TabBar.propTypes = {
  links: PropTypes.array.isRequired,
  styleTheme: PropTypes.object
};
TabBar.defaultProps = {
  styleTheme: {}
};


export default TabBar;
