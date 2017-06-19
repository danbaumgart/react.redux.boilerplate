import React from '../../utils/react';
import {TextField} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class TextArea extends React.PureComponent {
	constructor(props) {
		super(props);
        this.onUpdateText = this.onUpdateText.bind(this);
    }
    onUpdateText({target:{value}}){
        this.props.onChange(this.props.name, value);
    }
	render() {
	    const {name, label, value} = this.props;
	    const floatingLabelText = label || camelCaseToProperCase(name);
	    const props = {name, value, floatingLabelText, fullWidth: true, mutliLine: true,
            rows: 3,
            rowsMax: 6,
            onChange: this.onUpdateText
	    };
		return (<TextField {...props}/>);
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
