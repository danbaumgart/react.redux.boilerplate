import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LogList from './LogList';

class LogPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div>
        <h1>Log Page</h1>
        <LogList log={this.props.log} />
      </div>
    );
  }
}

LogPage.propTypes = {
  log: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    log: state.log
  };
}
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(mapStateToProps)(LogPage);
