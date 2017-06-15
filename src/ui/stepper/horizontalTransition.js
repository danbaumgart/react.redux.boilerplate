import React from '../../utils/react';
import {Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import StepNavigation from './stepNavigation';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
class HorizontalTransition extends React.PureComponent {
    constructor(props) {
        super(props);
        this.dummyAsync = this.dummyAsync.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
        }
    };

    dummyAsync(cb) {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 100);
        });
    }

    handleNext() {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
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
    render() {
        const {loading, stepIndex: _stepIndex} = this.state;
        const {stepLabels, getStepContent} = this.props;
        const StepHandler = getStepContent(_stepIndex);
        const contentStyle = {paddingBottom: "50px"};
        const previousDisabled = _stepIndex === 0;
        const nextDisabled = stepLabels.length <= _stepIndex + 1;
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Stepper linear={false}>
                    {stepLabels.map((stepLabel, stepIndex) =>
                        <Step active={_stepIndex === stepIndex} key={stepLabel}>
                            <StepButton onClick={() => this.setState({stepIndex})}>
                                {stepLabel}
                            </StepButton>
                        </Step>)
                    }
                </Stepper>
                <ExpandTransition loading={loading} open={true} transitionDuration={300}>
                    <StepHandler style={contentStyle}/>
                </ExpandTransition>
                <StepNavigation onNextRequested={this.handleNext}
                                onPreviousRequested={this.handlePrev}
                                previousDisabled={previousDisabled}
                                nextDisabled={nextDisabled}/>
            </div>
        );
    }
}
HorizontalTransition.propTypes = {
    stepLabels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    getStepContent: React.PropTypes.func.isRequired,
};
export default HorizontalTransition;
