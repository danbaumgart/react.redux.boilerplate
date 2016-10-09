import React, {PropTypes} from 'react';
import TabBar from './TabBar';

const Header = ({title, links, styleTheme}) => {
  return (
    <header className="mdl-layout__header" style={styleTheme}>
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">{title}</span>
      </div>
      <TabBar links={links} styleTheme={styleTheme}/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  styleTheme: PropTypes.object
};
Header.defaultProps = {
  styleTheme: {}
};


export default Header;
