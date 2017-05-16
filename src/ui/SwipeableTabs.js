import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
class SwipeableTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({
            slideIndex: value
        });
    }
    render() {
        const {views, tabs} = this.props;
        return (
            <div>
                <Tabs onChange={this.handleChange}
                      value={this.state.slideIndex}>{tabs.map((tab, index) =>
                    <Tab label={tab} value={index} key={tab} />)}
                </Tabs>
                <SwipeableViews index={this.state.slideIndex}
                                onChangeIndex={this.handleChange}>{views.map((view, index) =>
                    <div key={index} >{view}</div>)}
                </SwipeableViews>
            </div>
        );
    }
}
SwipeableTabs.propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    views: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
};
export default SwipeableTabs;
