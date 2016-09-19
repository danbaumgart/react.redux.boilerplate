import React, {PropTypes} from 'react';

const SubmitButton = ({label,idle,onSave, btn}) => {
  const validButtons = ['default','warning','danger','success','info'];
  let index = validButtons.findIndex(b => b.toLowerCase() === btn.toLowerCase());
  let buttonType = 'btn btn-';
  buttonType += index !== -1 ? btn : 'primary';
  return (
    <input className={buttonType}
           type="submit"
           onClick={onSave}
           disabled={!idle}
           value={label} />
  );
};

SubmitButton.propTypes = {
  onSave: PropTypes.func.isRequired,
  idle: PropTypes.bool,
  label: PropTypes.string,
  btn: PropTypes.string
};
SubmitButton.defaultProps = {
  idle: true,
  label: 'Submit',
  btn: 'primary'
};
export default SubmitButton;
