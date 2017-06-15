import React from '../../utils/react';
import {TextField} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import StaticError from '../../ui/common/staticError';
class TextFieldInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdateText = this.onUpdateText.bind(this);
    }
    onUpdateText({target:{value}}) {
        this.props.onChange(value);
    }
    render() {
        const {name, label: _label, value, children, errors} = this.props;
        const floatingLabelText = _label || camelCaseToProperCase(name);
        const props = {
            name, value, floatingLabelText, children,
            fullWidth: true,
            onChange: this.onUpdateText
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        return <TextField {...props} />;
    }
}
TextFieldInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    children: React.PropTypes.node
};

TextFieldInput.defaultProps = {
    label: null,
    value: '',
    errors: [],
    children: null
};

export default TextFieldInput;
