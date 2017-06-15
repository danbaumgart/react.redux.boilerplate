import React from '../../utils/react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {ImageNavigateBefore, ImageNavigateNext} from 'material-ui/svg-icons'
const StepNavigation = ({onNextRequested, onPreviousRequested, previousDisabled, nextDisabled}) => {
    const nextStyle = {position: "fixed", bottom: "5px", right: "5px"};
    const beforeStyle = {position: "fixed", bottom: "5px", left: "5px"};
    return (
        <div>
            {!previousDisabled && <FloatingActionButton
                disabled={previousDisabled}
                onTouchTap={onPreviousRequested}
                style={beforeStyle}>
                <ImageNavigateBefore/>
            </FloatingActionButton>}
            <FloatingActionButton
                disabled={nextDisabled}
                primary={true}
                style={nextStyle}
                onTouchTap={onNextRequested}>
                <ImageNavigateNext/>
            </FloatingActionButton>
        </div>);
};

StepNavigation.propTypes = {
    onNextRequested: React.PropTypes.func.isRequired,
    onPreviousRequested: React.PropTypes.func.isRequired,
    previousDisabled: React.PropTypes.bool,
    nextDisabled: React.PropTypes.bool
};
StepNavigation.defaultProps = {
	previousDisabled: false,
    nextDisabled: false
};
export default StepNavigation;
