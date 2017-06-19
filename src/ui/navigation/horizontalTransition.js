import React from '../../utils/react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import StepNavigation from './stepNavigation';
import Paper, {DISPLAY, POSITION} from '../common/paper';
import {WarningIcon, ErrorIcon, SuccessIcon, InfoIcon} from '../icons/statusIcons';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
class HorizontalTransition extends React.PureComponent {
    constructor(props) {
        super(props);
        this.dummyAsync = this.dummyAsync.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getStepButtonProps = this.getStepButtonProps.bind(this);
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
            dirty: [false]
        }
    };

    dummyAsync(cb) {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 100);
        });
    }

    handleNext() {
        const {dirty: _dirty, stepIndex} = this.state;
        const dirty = _dirty.slice();
        dirty[stepIndex] = true;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                dirty,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= this.props.stepLabels.length,
            }));
        }
    }

    handlePrev() {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 1,
            }));
        }
    }

    getStepProps(stepIndex) {
        return {
            active: stepIndex === this.state.stepIndex,
            key: this.props.stepLabels[stepIndex]
        };
    }

    hasErrors(stepIndex) {
        return Array.isArray(this.props.stepErrors) && this.props.stepErrors[stepIndex] === true;
    }
    getStepButtonProps(stepIndex) {
        const dirty = this.state.dirty.slice();
        dirty[this.state.stepIndex] = true;
        const onClick = () => this.setState({stepIndex, dirty});
        return this.hasErrors(stepIndex) ?
            {onClick, icon: this.props.submitted ? <ErrorIcon/> : <WarningIcon/>}  :
            this.state.dirty[stepIndex] === true ?
                {onClick, icon: <SuccessIcon/>} :
                {onClick};
    }
    render() {
        const {loading, stepIndex: _stepIndex} = this.state;
        const {stepLabels, stepViews} = this.props;
        const StepHandler = stepViews[_stepIndex];
        const isInitialStep = _stepIndex === 0;
        const isFinalStep = stepLabels.length <= _stepIndex + 1;
        return (
            <div>

                <Paper span={12} position={POSITION.FIXED} zDepth={2}>
                    <Stepper linear={false}>
                        {stepLabels.map((stepLabel, stepIndex) =>
                            <Step {...this.getStepProps(stepIndex)}>
                                <StepButton iconContainerStyle={{color: "red"}} {...this.getStepButtonProps(stepIndex)}>{stepLabel}</StepButton>
                            </Step>)}
                    </Stepper>
                </Paper>
                <Paper top={92} position={POSITION.ABSOLUTE} bottom={72} scroll span={12} >
                    <ExpandTransition loading={loading} open={true}>
                        <StepHandler />
                    </ExpandTransition>
                </Paper>
                <StepNavigation onNextRequested={this.handleNext}
                                onPreviousRequested={this.handlePrev}
                                previousDisabled={isInitialStep}
                                nextDisabled={isFinalStep} />
            </div>
        );
    }
}
HorizontalTransition.propTypes = {
    stepLabels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    stepViews: React.PropTypes.array.isRequired,
    stepErrors: React.PropTypes.arrayOf(React.PropTypes.bool),
    submitted: React.PropTypes.bool
};
HorizontalTransition.defaultProps = {
    stepErrors: null,
    submitted: false
};
export default HorizontalTransition;
