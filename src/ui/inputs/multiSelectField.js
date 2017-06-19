import React from '../../utils/react';
import {SelectField} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import StaticError from '../../ui/common/staticError';
class MultiSelectField extends React.PureComponent {
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
            multiple: true,
            name, value, floatingLabelText, children,
            fullWidth: true,
            onChange: this.onUpdateText
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        return <SelectField {...props} />;
    }
}
MultiSelectField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.array,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    children: React.PropTypes.node
};

MultiSelectField.defaultProps = {
    label: null,
    value: [],
    errors: [],
    children: null
};

export default MultiSelectField;
