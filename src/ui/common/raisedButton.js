import React from '../../utils/react';
import RaisedButton  from 'material-ui/RaisedButton';
const RaisedButtonInput = ({onClick, label}) => <RaisedButton onMouseUp={onClick} label={label} />;
RaisedButtonInput.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired
};
export default RaisedButtonInput;
