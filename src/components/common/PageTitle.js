import React, {PropTypes} from 'react';
import Divider from 'material-ui/Divider';
import {PALE_GREEN} from '../../utils/constants/colors';
const PageTitle = ({title}) => {
  return (
    <div>
      <h1 style={{color: PALE_GREEN}}>{title}</h1>
      <Divider />
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
