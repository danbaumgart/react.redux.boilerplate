import React from '../../utils/react';
import {TextField} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class TextArea extends React.PureComponent {
	constructor(props) {
		super(props);
        this.onUpdateText = this.onUpdateText.bind(this);
    }
    onUpdateText({target:{value}}){
        this.props.onChange(value);
    }
	render() {
	    const {name, label: _label, value} = this.props;
	    const label = _label || camelCaseToProperCase(name);
		return (<TextField name={name}
                           defaultValue={value}
                           floatingLabelText={label}
                           fullWidth={true}
                           multiLine={true}
                           rows={3}
                           rowsMax={6}
                           onChange={this.onUpdateText}/>);
	}
}
TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string
};

TextArea.defaultProps = {
    label: null,
	value: ''
};

export default TextArea;
