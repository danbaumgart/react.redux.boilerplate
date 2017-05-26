import React from '../../utils/react';
import {TextField} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class TextFieldInput extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateText = this.onUpdateText.bind(this);
	}
	onUpdateText({target:{value}}){
	    this.props.onChange(value);
    }
	render() {
	    const {name, label: _label, value, children} = this.props;
	    const label = _label || camelCaseToProperCase(name);
		return (<TextField name={name}
                           defaultValue={value}
                           floatingLabelText={label}
                           fullWidth={true}
                           onChange={this.onUpdateText}
                           children={children} />);
	}
}
TextFieldInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    children: React.PropTypes.node
};

TextFieldInput.defaultProps = {
    label: null,
	value: '',
    children: null
};

export default TextFieldInput;
