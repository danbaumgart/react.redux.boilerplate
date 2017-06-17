import React from '../../utils/react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {ImageNavigateBefore, ImageNavigateNext, ContentSend} from 'material-ui/svg-icons';
class _BottomNavigation extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        const {onPreviousRequested, onNextRequested, nextDisabled, previousDisabled, isInitialStep, isFinalStep, onSubmit} = this.props;
        return (
            <Paper zDepth={1}>
                <BottomNavigation>
                    <BottomNavigationItem label="Previous"
                                          disabled={previousDisabled}
                                          icon={<ImageNavigateBefore />}
                                          onTouchTap={onPreviousRequested}/>
                    <BottomNavigationItem label="Submit"
                                          icon={<ContentSend />}
                                          onTouchTap={onSubmit}/>
                    <BottomNavigationItem label="Next"
                                          disabled={nextDisabled}
                                          icon={<ImageNavigateNext />}
                                          onTouchTap={onNextRequested}/>
                </BottomNavigation>
            </Paper>
        );
    }
}
_BottomNavigation.propTypes = {
    onNextRequested: React.PropTypes.func.isRequired,
    onPreviousRequested: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    previousDisabled: React.PropTypes.bool,
    nextDisabled: React.PropTypes.bool,
    isInitialStep: React.PropTypes.bool,
    isFinalStep: React.PropTypes.bool
};
_BottomNavigation.defaultProps = {
    previousDisabled: false,
    nextDisabled: false,
    isInitialStep: false,
    isFinalStep: false
};
export default _BottomNavigation
