import React, {PropTypes} from 'react';
import {MenuItem, Menu} from 'material-ui';
import {Link} from 'react-router';

const NavigationLink = ({name, path, menuWrapped}) => {

  const props = {
    primaryText: name,
    value: path,
    containerElement: <Link to={path}/>
  };
  const link = <MenuItem {...props} />;
  return (menuWrapped ? <Menu children={link} /> : link || null);
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  menuWrapped: PropTypes.bool
};
NavigationLink.defaultProps = {
  menuWrapped: false
};


export default NavigationLink;
