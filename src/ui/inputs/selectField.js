import React from '../../utils/react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class _SelectField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, index, value) {
        console.log("SELECT", value, event, index);
        this.props.onChange(this.props.name, value);
    }

    render() {
        const {name, label: _label, value, children, errors, dataSource} = this.props;
        const floatingLabelText = _label || camelCaseToProperCase(name);
        const props = {
            name, value, floatingLabelText, children,
            fullWidth: true,
            onChange: this.onChange
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        const mappedDataSource = Array.isArray(dataSource) && dataSource.length > 0 ?
            dataSource.map((data, index) => <MenuItem key={data.id}
                                                      primaryText={data.name}
                                                      secondaryText={data.id}
                                                      value={data.id}/>) : null;
        console.log("DATA", dataSource, mappedDataSource);
        return (
                <SelectField floatingLabelText={floatingLabelText}
                             name={name}
                             value={value}
                             fullWidth={true}
                             onChange={this.onChange}>
                    {mappedDataSource}
                </SelectField>
        );
    }
}

_SelectField.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    children: React.PropTypes.node
};

_SelectField.defaultProps = {
    label: null,
    value: '',
    errors: [],
    children: null
};
export default _SelectField;
