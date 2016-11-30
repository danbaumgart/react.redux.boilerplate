import React, {PropTypes} from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import restructure from '../utils/restructure';

class SnackbarManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageNumber: 0,
      alerts: []
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  
  componentWillMount() {
    let alerts = this.props.alerts.slice(0);
    this.setState({
      alerts: alerts
    });
  }
  
  componentWillReceiveProps(nextProps) {
    let alerts = nextProps.alerts.slice(0);
    if (this.props.alerts.length < nextProps.alerts.length)
      this.setState({
        alerts: alerts
      });
  }
  
  handleRequestClose() {
    let hasMoreMessages = this.state.messageNumber < this.state.alerts.length;
    let increment = this.state.messageNumber + 1;
    if(hasMoreMessages)
      this.setState({messageNumber: increment});
  }
  
  render() {
    let showSnackbar = this.state.alerts.length > this.state.messageNumber;
    let alert = showSnackbar && this.state.alerts[this.state.messageNumber];
    const style = Object.assign({}, {
      textAlign: 'center',
      fontWeight: '800'
    });
    if(alert)
      Object.assign(style, ...Object.keys(alert.style).map(key => Object.assign({[key]: alert.style[key]})));
    let message = alert && <span>{alert.message}</span>;
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

export default connect(mapStateToProps)(SnackbarManager);
