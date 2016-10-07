import React, {PropTypes} from 'react';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PageContent = ({children}) => {
  return (<div className="page-content">{children}</div>);
};

PageContent.propTypes = {
  children: PropTypes.any.isRequired
};


export default PageContent;
