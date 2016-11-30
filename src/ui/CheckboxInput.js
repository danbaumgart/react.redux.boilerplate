import React, {PropTypes} from 'react';
import Checkbox from 'material-ui/Checkbox';

const CheckboxInput = ({label, name, update, value}) => {
  return (
    <div>
      <br/>
      <Checkbox label={label} name={name} onCheck={update} defaultChecked={value || false} />
    </div>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  value: PropTypes.bool
};
CheckboxInput.defaultProps = {
  value: false
};

export default CheckboxInput;
