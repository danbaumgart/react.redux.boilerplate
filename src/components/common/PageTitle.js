import React, {PropTypes} from 'react';
import Divider from 'material-ui/Divider';
import {BLACK} from '../../utils/constants/colors';
const PageTitle = ({title}) => {
  return (
    <div>
      <h1 style={{color: "rgba(107, 177, 151, 0.97)"}}>{title}</h1>
      <Divider />
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
