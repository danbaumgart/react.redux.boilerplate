import React, {PropTypes} from 'react';
import Checkbox from 'material-ui/Checkbox';

const CheckboxInput = ({label, name, update, defaultChecked, value}) => {
  return (
    <Checkbox label={label}
              name={name}
              onCheck={update}
              checked={defaultChecked} />
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired
};
CheckboxInput.defaultProps = {
  value: false
};

export default CheckboxInput;
