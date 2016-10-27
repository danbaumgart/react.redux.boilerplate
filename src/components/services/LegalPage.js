import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionButton from '../../ui/ActionButton';
import * as actions from '../../actions/loginActions';

class LegalPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <div>
            <ActionButton actionType="submit" buttonType="flat" />
          </div>
        );
    }
}

LegalPage.propTypes = {
    //title: PropTypes.string.isRequired
};

LegalPage.defaultProps = {
    //title: LegalPage
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LegalPage);
