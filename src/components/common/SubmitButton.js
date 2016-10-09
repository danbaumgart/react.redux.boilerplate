import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SubmitButton = ({label, disable, onSave, btn}) => {
  const validButtons = ['default', 'warning', 'danger', 'success', 'info'];
  let index = validButtons.findIndex(b => b.toLowerCase() === btn.toLowerCase());
  let buttonType = 'btn btn-';
  buttonType += index !== -1 ? btn : 'primary';
  return (
    <div className="col-xs-12" style={{textAlign: "right"}}>
      <RaisedButton onClick={onSave}
                    label={label}
                    primary
                    backgroundColor='#427994'
                    labelColor='white'
                    disabled={disable}/>
    </div>
  );
};

SubmitButton.propTypes = {
  onSave: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  label: PropTypes.string,
  btn: PropTypes.string
};
SubmitButton.defaultProps = {
  disable: false,
  label: 'Submit',
  btn: 'primary'
};
export default SubmitButton;
