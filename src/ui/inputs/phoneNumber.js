import React from '../../utils/react';
import MaskedField from './maskedField';
import MASKS from '../constants/masks';
class PhoneNumber extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (<MaskedField mask={MASKS.PHONE_NUMBER} {...props}/>);
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
