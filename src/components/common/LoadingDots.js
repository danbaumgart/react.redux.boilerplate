import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {frame: 1};
  }
  
  componentDidMount() {
    this.interval = setInterval(()=> {
      this.setState({ //eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval)
  }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  
  render() {
    const dotStyle = {color:"black"};
    if(this.props.inverse)
      dotStyle.color = "white";
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while(dots > 0){
      text += '.';
      dots --;
    }
    return <span style={dotStyle} {...this.props}>{text}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
  inverse:PropTypes.bool
};

export default LoadingDots;
