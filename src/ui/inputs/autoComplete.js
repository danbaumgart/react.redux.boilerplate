import React from '../../utils/react';
import AutoComplete from 'material-ui/AutoComplete';
import StaticError from '../common/staticError';
import {camelCaseToProperCase} from '../../utils/stringUtils';
class _AutoComplete extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest = this.onNewRequest.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {searchText: props.value || ''}
    }
    onNewRequest(chosenRequest, index){
        if(chosenRequest && index > -1) this.setState({searchText: chosenRequest.text},
            () => this.props.onNewRequest(chosenRequest.value, index));
        else this.setState({searchText: this.props.value || ''});
    }
    onUpdateInput(searchText) {
        if(typeof this.props.onUpdateInput === 'function')
            this.setState({searchText}, () => this.props.onUpdateInput(this.props.name, searchText));
        else this.setState({searchText});
    }
    onFocus() {
        this.setState({searchText: ''});
    }
    onBlur() {
        this.setState({searchText: this.props.value || ''});
    }
    render() {
        const {searchText} = this.state;
        const {name, label: _label, children, errors, filter, dataSource: _dataSource} = this.props;
        const dataSource = Array.isArray(_dataSource) && _dataSource.length > 0 ? _dataSource : [];
        const floatingLabelText = _label || camelCaseToProperCase(name);
        const props = {
            name, floatingLabelText, children, dataSource, filter,
            searchText,
            onFocus: this.onFocus,
            fullWidth: true,
            onUpdateInput: this.onUpdateInput,
            onNewRequest: this.onNewRequest,
            maxSearchResults: 5,
            onBlur: this.onBlur
        };
        if (Array.isArray(errors) && errors.length > 0)
            Object.assign(props, {errorText: <StaticError errors={errors}/>});
        return <AutoComplete {...props} />;
    }
}
_AutoComplete.propTypes = {
    name: React.PropTypes.string.isRequired,
    onUpdateInput: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
    onNewRequest: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    children: React.PropTypes.node,
    filter: React.PropTypes.func
};
_AutoComplete.defaultProps = {
    label: null,
    value: '',
    errors: [],
    children: null,
    filter: AutoComplete.noFilter
};
export default _AutoComplete;
