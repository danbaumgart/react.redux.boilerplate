import TimePicker from 'material-ui/TimePicker';
import {TimeModel} from '../../utils/model/dateTimeModel';
import React from '../../utils/react';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import StaticError from '../common/staticError';

class TimePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateTime = this.onUpdateTime.bind(this);
        this.clearTime = this.clearTime.bind(this);
	}
	onUpdateTime(empty, value) {
        this.props.onChange(this.props.name, value);
    }
    clearTime(){
        this.props.onChange(this.props.name, null);
    }
	render() {
        const textFieldStyle = {width: '100%'};
        const {name, label: _label, value: _value, errors} = this.props;
        let hintText, floatingLabelText;
        const label = hintText = floatingLabelText = _label || camelCaseToProperCase(name);
        const props = {label, name, hintText, floatingLabelText, textFieldStyle,
            autoOk: true,
            onChange: this.onUpdateTime,
            cancelLabel: 'CLEAR',
            onDismiss: this.clearTime,
            value: _value ? _value.ToStandardDate() : null
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        if (_value) Object.assign(props, {defaultTime: props.value});
        return <TimePicker {...props} />;
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
    value: null
};

export default TimePickerTool;
