import TimePicker from 'material-ui/TimePicker';
import {DateTime, TimeModel} from '../../utils/model/dateTimeModel';
import React from '../../utils/react';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class TimePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateTime = this.onUpdateTime.bind(this);
	}
	onUpdateTime(empty, value) {
        this.props.onChange(value);
    }
	render() {
	    const textFieldStyle = {width: '100%'};
        const {label: _label, name, value: _value} = this.props;
        const label = _label || camelCaseToProperCase(name);
        const value = _value.ToStandardDate();
		return (<TimePicker name={name}
                            hintText={label}
                            floatingLabelText={label}
                            defaultTime={value}
                            autoOk
                            onChange={this.onUpdateTime}
                            textFieldStyle={textFieldStyle} />);
	}
}
TimePickerTool.propTypes = {
	name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.instanceOf(TimeModel)
};

TimePickerTool.defaultProps = {
    label: null,
    value: DateTime.ToTimeModel()
};

export default TimePickerTool;
