import React, {PropTypes} from 'react';

const PageContent = ({children}) => {
  return (<div className="page-content">{children}</div>);
};

PageContent.propTypes = {
  children: PropTypes.any.isRequired
};


export default PageContent;
