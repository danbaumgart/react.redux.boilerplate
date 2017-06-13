import React from '../utils/react';
import {Tabs, Tab, Stepper, StepLabel, Step} from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
const formMapper = (model, schema) => ({
    ...Object.keys(model).map(field => {
        const data = {}
    })
});
class SwipeableTabs extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {slideIndex: 0};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({
            slideIndex: value
        });
    }
    render() {
        const {views, tabs} = this.props;
        // const swipeableViews = <SwipeableViews index={this.state.slideIndex}
        //                                        onChangeIndex={this.handleChange}>
        //     {views.map((view, index) => <div key={index} >{view}</div>)}
        // </SwipeableViews>;
        return (
            <div>
                <Tabs onChange={this.handleChange}
                      value={this.state.slideIndex}>{tabs.map((tab, index) =>
                    <Tab label={tab} value={index} key={tab} />)}
                </Tabs>
                {views[this.state.slideIndex]}
            </div>
        );
    }
}
SwipeableTabs.propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    views: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
};
export default SwipeableTabs;
