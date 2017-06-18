import React from '../../../utils/react';
import MASKS from '../../constants/masks';
import VMasker from 'vanilla-masker';
import StaticError from '../../common/staticError';
import {TextField} from 'material-ui';
import {camelCaseToProperCase} from '../../../utils/stringUtils';
class MaskedField extends React.PureComponent {
    constructor(props) {
        super(props);
        const value = props.value && props.value !== '' ? VMasker.toPattern(props.value, props.mask) : '';
        this.state = {value};
    }
    onChange(mask, event) {
        const value = VMasker.toPattern(event.target.value, mask);
        this.setState({value});
        if (this.props.onChange)
            this.props.onChange(value, event);
    }
    render() {
        const {mask, label, errors, ...other} = this.props;
        const {name} = other;
        const errorText = Array.isArray(errors) && errors.length && <StaticError errors={errors}/> || null;
        const props = Object.assign({}, other, {
            onChange: this.onChange.bind(this, mask),
            fullWidth: true,
            value: this.state.value,
            floatingLabelText: label || camelCaseToProperCase(name)
        }, {errorText});
        return <TextField {...props} />;
    }
}
MaskedField.propTypes = {
    mask: React.PropTypes.oneOf([MASKS.PHONE_NUMBER, MASKS.INTERNATIONAL_PHONE, MASKS.EXTENSION]).isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    children: React.PropTypes.node
};
MaskedField.defaultProps = {
    label: null,
    value: '',
    errors: [],
    children: null
};
export default MaskedField;
