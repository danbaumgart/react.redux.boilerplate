import React, {PropTypes} from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarToaster extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Snackbar message={this.state.snackbarMessage}
                open={this.state.showSnackbar}
                onRequestClose={this.handleRequestClose}
                autoHideDuration={1600} />
    );
  }
}
SnackbarToaster.propTypes = {
  messages: PropTypes.array.isRequired
};

export default SnackbarToaster;
