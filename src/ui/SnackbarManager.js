import React, {PropTypes} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import reformat from '../utils/reformat';
class SnackbarManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageNumber: 0,
      messages: []
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    let alerts = this.props.alerts.slice(0);
    this.setState({
      messages: alerts
    });
  }

  componentWillReceiveProps(nextProps) {
    let alerts = nextProps.alerts.slice(0);
    if (this.props.alerts.length < nextProps.alerts.length)
      this.setState({
        messages: alerts
      });
  }

  handleRequestClose() {
    let hasMoreMessages = this.state.messageNumber < this.state.messages.length;
    let increment = this.state.messageNumber + 1;
    if(hasMoreMessages)
      this.setState({messageNumber: increment});
  }

  render() {
    console.log("SNACKBAR MANAGER STATE", this.state);
    let showSnackbar = this.state.messages.length > this.state.messageNumber;
    const style = Object.assign({}, {
      textAlign: 'center',
      fontWeight: "800",
      color: 'white'
    });
    let alert = showSnackbar && this.state.messages[this.state.messageNumber];
    console.log("MESSAGE", alert);
    if(alert)
      switch(alert.result) {
        case 'success':
          style.color = 'green';
          break;
        case 'error':
          style.color = 'red';
          break;
        default:
          style.color = 'white';
          break;
      }
    let message = alert && <span>{reformat.properCase(alert.key, alert.message.toLowerCase())}</span>;
    return (
      <Snackbar open={showSnackbar}
                message={message}
                autoHideDuration={1600}
                contentStyle={style}
                onRequestClose={this.handleRequestClose}/>
    );
  }
}
SnackbarManager.propTypes = {
  alerts: PropTypes.array
};
SnackbarManager.defaultProps = {
  alerts: []
};
function mapStateToProps(state, ownProps) {
  return {
    alerts: state.alerts
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(dispatch)
//   };
// }

export default connect(mapStateToProps)(SnackbarManager);
