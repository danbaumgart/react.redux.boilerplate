import React, {PropTypes} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const Spinner = ({status}) => {
  
  const style = {
    container: {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
      zIndex: "1198",
      backgroundColor:"rgba(0, 0, 0, 0.301961)",
      textAlign: "center"
    },
    refresh: {
      position: "relative",
      display: 'inline-block',
      zIndex: "1199",
      backgroundColor: "rgba(255,255,255,.02)"
    }
  };
  if(status === 'hide')
    Object.assign(style, {container: {display: "none"}});
  return (
    <div style={style.container}>
      <RefreshIndicator loadingColor="rgb(191, 232, 228)" status={status} style={style.refresh} top={125} left={0} size={200} />
    </div>
  );
};
Spinner.propTypes = {
  status: PropTypes.oneOf(['loading','ready','hide'])
};
Spinner.defaultProps = {
  status: 'hide'
};


export default Spinner;
