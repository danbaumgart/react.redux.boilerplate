import React from '../../utils/react';
import MaskedTextField from '../common/maskedTextField';
import MASKS from '../constants/inputMasks';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class MaskedField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
    }
    onUpdateInput(value) {
        this.props.onChange(value);
    }
    render() {
        const {name, label: _label, value, mask} = this.props;
        const label = _label || camelCaseToProperCase(name);
        return (<MaskedTextField name={name}
                                 defaultValue={value}
                                 floatingLabelText={label}
                                 fullWidth={true}
                                 onChange={this.onUpdateInput}
                                 mask={mask} />);
    }
}
MaskedField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    mask: React.PropTypes.oneOf([MASKS.PHONE_NUMBER, MASKS.INTERNATIONAL_PHONE, MASKS.EXTENSION]).isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string
};
MaskedField.defaultProps = {
    label: null,
    value: ''
};
export default MaskedField;
