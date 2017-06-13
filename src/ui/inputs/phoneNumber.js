import React from '../../utils/react';
import MaskedTextField from '../common/maskedTextField';
import MASKS from '../constants/inputMasks';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import StaticError from '../common/staticError';
class PhoneNumber extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, label: _label, value: defaultValue, onChange, errors, children} = this.props;
        const floatingLabelText = _label || camelCaseToProperCase(name);
        const props = {
            name, defaultValue, floatingLabelText, children, onChange,
            mask: MASKS.PHONE_NUMBER,
            fullWidth: true
        };
        if(Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        return (<MaskedTextField {...props}/>);
    }
}
PhoneNumber.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string)
};
PhoneNumber.defaultProps = {
    label: null,
    value: '',
    errors: []
};
export default PhoneNumber;
