import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PageTitle from '../../ui/common/PageTitle';
class EventsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {events} = this.props;
		return (
		    <div>
                <PageTitle title="Events"/>
            </div>

        );
	}
}

EventsPage.propTypes = {
	events: PropTypes.object
};

EventsPage.defaultProps = {
	events: null
};

function mapStateToProps(state, ownProps) {
	const {events} = state;
	return {events};
}

function mapDispatchToProps(dispatch) {
	const actions = {};
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
