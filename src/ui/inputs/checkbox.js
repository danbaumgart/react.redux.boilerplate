import React from '../../utils/react';
import {Checkbox} from 'material-ui';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class CheckboxInput extends React.PureComponent {
	constructor(props) {
		super(props);
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(event, value){
        this.props.onChange(value);
    }
	render() {
        const {name, label: _label, value, onChange} = this.props;
        const label = _label || camelCaseToProperCase(name);
		return (<Checkbox name={name}
                          checked={value}
                          label={label}
                          onCheck={this.onUpdate} />);
	}
}
CheckboxInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.bool
};

CheckboxInput.defaultProps = {
    label: null,
	value: false
};

export default CheckboxInput;
