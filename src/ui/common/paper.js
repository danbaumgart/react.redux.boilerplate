import React from '../../utils/react';
import Paper from 'material-ui/Paper';
import StyleUtils from '../../utils/styleUtils';
export const POSITION = {
    FIXED: 'fixed',
    ABSOLUTE: 'absolute',
    RELATIVE: 'relative'
};
export const DISPLAY = {
    BLOCK: 'block',
    INLINE_BLOCK: 'inline-block',
    FLEX: 'flex'
};
const _Paper = ({...props}) => {
    const {zDepth, padding: _padding, margin: _margin, display, position, span, height, scroll, ...location} = props;
    const style = {};
    const padding = _padding && StyleUtils.reduceProp(_padding, "padding");
    const margin = _margin && StyleUtils.reduceProp(_margin, "margin");

    Object.assign(style, padding, margin,
        display && {display},
        position && {position},
        location && StyleUtils.mapPosition(location),
        scroll && {overflow: "auto"},
        props.style
    );
    if(span) Object.assign(style, {width: span * (100/12) + "%"});
    if(height) Object.assign(style, {height: height + "px"});
    console.log("STYLE", style);
    return (
        <Paper zDepth={zDepth} style={style}>
            {props.children}
        </Paper>
    );
};

_Paper.propTypes = {
    zDepth: React.PropTypes.number,
    display: React.PropTypes.oneOf([DISPLAY.INLINE_BLOCK, DISPLAY.BLOCK, DISPLAY.FLEX]),
    position: React.PropTypes.oneOf([POSITION.RELATIVE, POSITION.FIXED, POSITION.ABSOLUTE]),
    padding: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.number),
        React.PropTypes.arrayOf(React.PropTypes.object),
        React.PropTypes.object,
        React.PropTypes.number
    ]),
    margin: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.number),
        React.PropTypes.arrayOf(React.PropTypes.object),
        React.PropTypes.object,
        React.PropTypes.number
    ]),
    top: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number,
    right: React.PropTypes.number,
    height: React.PropTypes.number,
    span: React.PropTypes.number,
    style: React.PropTypes.object,
    scroll: React.PropTypes.bool
};
_Paper.defaultProps = {
    zDepth: 1,
    display: null,
    position: null,
    padding: 10,
    margin: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    height: null,
    span: null,
    style: null,
    scroll: false
};

export default _Paper;
