import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PageTitle from '../../components/common/PageTitle';
class TestimonialsPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const {content} = this.props;
        return (<div>
            <PageTitle title="Testimonials" />
        </div>);
	}
}

TestimonialsPage.propTypes = {
	content: PropTypes.object
};

TestimonialsPage.defaultProps = {
	content: null
};

function mapStateToProps(state, ownProps) {
	const {content} = state;
	return {content};
}

function mapDispatchToProps(dispatch) {
	const actions = {};
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestimonialsPage);
