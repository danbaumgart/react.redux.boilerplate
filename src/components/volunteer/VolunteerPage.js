import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionButton from '../../ui/ActionButton';
import * as actions from '../../actions/accountActions';

class VolunteerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        <ActionButton actionType="submit" buttonType="flat" />
      </div>
    );
  }
}

VolunteerPage.propTypes = {
  //title: PropTypes.string.isRequired
};

VolunteerPage.defaultProps = {
  //title: VolunteerPage
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

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerPage);
