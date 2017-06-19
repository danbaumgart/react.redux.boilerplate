import React from '../../../utils/react';
import MaskedField from './maskedField';
import MASKS from '../../constants/masks';
import PatternHandler from '../../../utils/regex/patterns';
import {TELEPHONE_MASK} from '../../../utils/constants/regexPatterns';
class PhoneNumber extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(name, maskedValue) {
        const value = maskedValue.replace(PatternHandler[TELEPHONE_MASK], '');
        this.props.onChange(name, value);
    }
    render() {
        const {name, label, value, errors} = this.props;
        const props = {name, label, value, errors, mask: MASKS.PHONE_NUMBER, onChange: this.onChange};
        return (<MaskedField {...props}/>);
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
