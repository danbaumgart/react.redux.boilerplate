import React from '../../utils/react';
import MaskedTextField from '../common/maskedTextField';
import MASKS from '../constants/inputMasks';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class PhoneNumber extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdatePhoneNumber = this.onUpdatePhoneNumber.bind(this);
    }
    onUpdatePhoneNumber({target:{value}}) {
        this.props.onChange(value);
    }
    render() {
        const {name, label: _label, value, onChange} = this.props;
        const label = _label || camelCaseToProperCase(name);
        return (<MaskedTextField name={name}
                                 defaultValue={value}
                                 floatingLabelText={label}
                                 fullWidth={true}
                                 onChange={onChange}
                                 mask={MASKS.PHONE_NUMBER}/>);
    }
}
PhoneNumber.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string
};
PhoneNumber.defaultProps = {
    label: null,
    value: ''
};
export default PhoneNumber;

{/*import React from '../../utils/react';*/}
{/*import MaskedField from './maskedField';*/}
{/*import MASKS from '../constants/inputMasks';*/}
{/*import InputMask from 'react-input-mask';*/}
{/*import {camelCaseToProperCase} from '../../utils/stringUtils';*/}
{/*class PhoneNumber extends React.PureComponent {*/}
    {/*constructor(props) {*/}
        {/*super(props);*/}
        {/*this.onUpdateText = this.onUpdateText.bind(this);*/}
    {/*}*/}
    {/*onUpdateText(value) {*/}
        {/*this.props.onChange(value);*/}
    {/*}*/}
    {/*render() {*/}
        {/*const {name, label: _label, value, onChange} = this.props;*/}
        {/*const label = _label || camelCaseToProperCase(name);*/}
        {/*return (<MaskedField name={name}*/}
                             {/*value={value}*/}
                             {/*onChange={onChange}*/}
                             {/*mask={MASKS.PHONE_NUMBER}*/}
                             {/*label={label}/>);*/}
    {/*}*/}
{/*}*/}
{/*PhoneNumber.propTypes = {*/}
    {/*name: React.PropTypes.string.isRequired,*/}
    {/*onChange: React.PropTypes.func.isRequired,*/}
    {/*label: React.PropTypes.string,*/}
    {/*value: React.PropTypes.string*/}
{/*};*/}
{/*PhoneNumber.defaultProps = {*/}
    {/*label: null,*/}
    {/*value: ''*/}
{/*};*/}
{/*export default PhoneNumber;*/}
