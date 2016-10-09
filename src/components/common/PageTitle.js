import React, {PropTypes} from 'react';

const PageTitle = ({title}) => {
  return (
  <h1>{title}</h1>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
