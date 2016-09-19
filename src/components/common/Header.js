import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  let separator = " | ";
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {separator}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {separator}
      <Link to="/about" activeClassName="active">About</Link>
      {separator}
      <Link to="/log" activeClassName="active">Log</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading:PropTypes.bool.isRequired
};


export default Header;
