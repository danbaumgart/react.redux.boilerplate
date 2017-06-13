import React from '../utils/react';
import {AutoComplete, MenuItem} from 'material-ui';
import debounce from '../utils/debounce';
import {camelCaseToProperCase} from '../utils/stringUtils';
class Typeahead extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.performSearch = debounce(this.props.promise, this.props.debounce);
    }

    onUpdateInput(searchText) {
        this.props.onUpdateInput(searchText);
        this.performSearch(searchText);
    }

    render() {
        const {searchText, dataSource, name, onUpdateInput, onSelect} = this.props;
        const hasResults = Array.isArray(dataSource) && dataSource.length > 0;
        const mappedDataSource = hasResults ?
            dataSource.map((data, index) => ({
                text: data.name, data,
                value: (<MenuItem key={data.id}
                                  primaryText={data.name}
                                  secondaryText={data.city + ', ' + data.state}
                                  value={data.id}/>)
            })) : [];
        const floatingLabelText = camelCaseToProperCase(name);
        const selectItem = (value, index) => onSelect(dataSource[index]);
        return (
            <div>
                <AutoComplete floatingLabelText={floatingLabelText}
                              name={name}
                              hintText="Search..."
                              searchText={searchText}
                              fullWidth={true}
                              onFocus={() => onUpdateInput('')}
                              onNewRequest={selectItem}
                              maxSearchResults={5}
                              dataSource={mappedDataSource}
                              onUpdateInput={this.onUpdateInput}
                              filter={({searchText, key}) => true}
                />
            </div>
        );
    }
}
Typeahead.propTypes = {
    name: React.PropTypes.string.isRequired,
    promise: React.PropTypes.func.isRequired,
    dataSource: React.PropTypes.array.isRequired,
    onUpdateInput: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    searchText: React.PropTypes.string,
    debounce: React.PropTypes.number
};
Typeahead.defaultProps = {
    debounce: 0,
    searchText: ''
};
export default Typeahead;
