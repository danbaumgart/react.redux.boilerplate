import React from '../../utils/react';
import {DatePicker} from 'material-ui';
import {DateTime, DateModel} from '../../utils/model/dateTimeModel';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class DatePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateDate = this.onUpdateDate.bind(this);
	}
	onUpdateDate(empty, value) {
        this.props.onChange(value);
    }
	render() {
	    const textFieldStyle = {width: '100%'};
        const {name, label: _label, value: _value} = this.props;
        const label = _label || camelCaseToProperCase(name);
	    const value = _value.ToStandardDate();
		return (<DatePicker name={name}
                            label={label}
                            hintText={label}
                            defaultDate={value}
                            floatingLabelText={label}
                            onChange={this.onUpdateDate}
                            autoOk
                            textFieldStyle={textFieldStyle} />);
	}
}
DatePickerTool.propTypes = {
	name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.instanceOf(DateModel)
};

DatePickerTool.defaultProps = {
    label: null,
	value: DateTime.ToDateModel()
};

export default DatePickerTool;
