import React from '../../utils/react';
import {DatePicker} from 'material-ui';
import {DateModel} from '../../utils/model/dateTimeModel';
import {camelCaseToProperCase} from '../../utils/stringUtils';
import StaticError from '../common/staticError';
class DatePickerTool extends React.PureComponent {
	constructor(props) {
		super(props);
		this.onUpdateDate = this.onUpdateDate.bind(this);
        this.clearDate = this.clearDate.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.state = {
            mode: 'landscape'
        };
	}
	onUpdateDate(empty, value) {
        this.props.onChange(this.props.name, value);
    }
    clearDate(){
	    this.props.onChange(this.props.name, null);
    }
    onFocus(){
        const mode = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 600 ?
            'landscape' : 'portrait';
        if(mode !== this.state.mode) this.setState({mode});
    }
	render() {
	    const textFieldStyle = {width: '100%'};
        const {name, label: _label, value: _value, errors} = this.props;
        let hintText, floatingLabelText;
        const label = hintText = floatingLabelText = _label || camelCaseToProperCase(name);
	    const props = {label, name, hintText, floatingLabelText, textFieldStyle,
            autoOk: true,
            onChange: this.onUpdateDate,
            cancelLabel: 'CLEAR',
            onDismiss: this.clearDate,
            value: _value ? _value.ToStandardDate() : null,
            mode: this.state.mode,
            onFocus: this.onFocus,
	    };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        if (_value) Object.assign(props, {defaultDate: props.value});
		return <DatePicker {...props} />;
	}
}
DatePickerTool.propTypes = {
	name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    label: React.PropTypes.string,
    value: React.PropTypes.instanceOf(DateModel)
};

DatePickerTool.defaultProps = {
    errors: [],
    label: null,
	value: null
};

export default DatePickerTool;
