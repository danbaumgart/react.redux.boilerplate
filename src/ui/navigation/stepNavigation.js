import React from '../../utils/react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {ImageNavigateBefore, ImageNavigateNext} from 'material-ui/svg-icons'
import {GREEN_YELLOW, PURPLE} from '../../utils/constants/colors';
import Paper from 'material-ui/Paper';
import {DISPLAY, POSITION} from '../../ui/common/paper';
const DIRECTION = {
    NEXT: 'NEXT',
    PREVIOUS: 'PREVIOUS'
};
const StepNavigationButton = ({onTouchTap, disabled, direction = DIRECTION.NEXT}) => {
    const style = {position: "absolute", bottom: 5};
    const isNextButton = direction.toUpperCase() === DIRECTION.NEXT;
    Object.assign(style, isNextButton ? {right: "5px"} : {left: "5px"});
    const NavigationIcon = isNextButton ? ImageNavigateNext : ImageNavigateBefore;
    return <FloatingActionButton style={style}
                                 disabled={disabled}
                                 onTouchTap={onTouchTap}
                                 children={<NavigationIcon />} />;
};
StepNavigationButton.propTypes = {
    onTouchTap: React.PropTypes.func.isRequired,
    direction: React.PropTypes.oneOf([DIRECTION.NEXT, DIRECTION.PREVIOUS]),
    disabled: React.PropTypes.bool
};
StepNavigationButton.defaultProps = {
    direction: DIRECTION.NEXT,
    disabled: false
};
class StepNavigation extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {isInitialStep, isFinalStep} = this.props;
        const paperStyle = {
            position: "fixed",
            bottom: "0px",
            margin: "5px",
            height: "65px",
            width: "100%",
            textAlign: 'center',
            // backgroundColor: PURPLE,
            display: 'inline-block',
        };
        const {onPreviousRequested, previousDisabled, onNextRequested, nextDisabled} = this.props;
        const previousProps = {
            onTouchTap: onPreviousRequested,
            disabled: previousDisabled,
            direction: DIRECTION.PREVIOUS
        };
        const style = {zDepth: 4, span: 12, position: POSITION.FIXED, bottom: 0, style: {textAlign: 'center'}};
        const nextProps = {onTouchTap: onNextRequested, disabled: nextDisabled};
        return (
            <Paper style={paperStyle} zDepth={3}>
                {!isInitialStep && <StepNavigationButton {...previousProps} />}
                {!isFinalStep && <StepNavigationButton {...nextProps} />}
            </Paper>
        );
    }
}

StepNavigation.propTypes = {
    onNextRequested: React.PropTypes.func.isRequired,
    onPreviousRequested: React.PropTypes.func.isRequired,
    previousDisabled: React.PropTypes.bool,
    nextDisabled: React.PropTypes.bool,
    isInitialStep: React.PropTypes.bool,
    isFinalStep: React.PropTypes.bool
};
StepNavigation.defaultProps = {
    previousDisabled: false,
    nextDisabled: false,
    isInitialStep: false,
    isFinalStep: false
};
export default StepNavigation;
