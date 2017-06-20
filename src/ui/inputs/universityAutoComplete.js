import React from '../../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AutoComplete from './autoComplete';
import debounce from '../../utils/debounce';
import {searchUniversities} from '../../actions/creators/universities';
import {updateLocationFromUniversitySearch, updateLocationName} from '../../actions/creators/location';
class UniversityAutoComplete extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest = this.onNewRequest.bind(this);
        this.searchUniversities = debounce(this.props.actions.searchUniversities, this.props.debounce);
    }

    onNewRequest(university) {
        if (university) this.props.actions.updateLocation(university);
        else this.props.actions.updateLocationName('');
    }

    onUpdateInput(name, searchText) {
        this.searchUniversities(searchText);
    }

    render() {
        const {searchText, dataSource, errorInfo} = this.props;
        return (
            <div>
                <AutoComplete onUpdateInput={this.onUpdateInput}
                              name="name"
                              value={searchText}
                              errors={errorInfo}
                              onNewRequest={this.onNewRequest}
                              maxSearchResults={5}
                              dataSource={dataSource}
                              filter={AutoComplete.fuzzyFilter}/>
            </div>
        );
    }
}
UniversityAutoComplete.propTypes = {
    actions: React.PropTypes.object,
    dataSource: React.PropTypes.arrayOf(React.PropTypes.object),
    searchText: React.PropTypes.string,
    errorInfo: React.PropTypes.arrayOf(React.PropTypes.string),
    debounce: React.PropTypes.number
};
UniversityAutoComplete.defaultProps = {
    actions: null,
    dataSource: [],
    errorInfo: [],
    searchText: '',
    debounce: 0
};
function mapStateToProps(state, ownProps) {
    const {universities, location: {name: searchText}, errorInfo: {location: errorInfo}} = state;
    const hasSearchResults = Array.isArray(universities) && universities.length > 0;
    const dataSource = hasSearchResults ? universities.map((university, index) => ({
            text: university.name,
            value: university
        })) : [];
    return {dataSource, searchText, errorInfo};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({searchUniversities, updateLocationName,
            updateLocation: updateLocationFromUniversitySearch
        }, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UniversityAutoComplete);
