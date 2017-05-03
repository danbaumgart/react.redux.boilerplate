import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
class SwipeableView {
    constructor(label, content){
        this.label = label;
        this.content = content;
    }
}
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    },
    slide: {
        padding: 10
    }
};

export default class TabsExampleSwipeable extends React.Component {
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
        const {views} = this.props;
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    {views.map((view, index) => <Tab label={view.label} value={index} key={view.label} />)}
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    {views.map((view, index) => <div>{view.Content}</div>)}
                    {/*<div>*/}
                        {/*<h2 style={styles.headline}>Tabs with slide effect</h2>*/}
                        {/*Swipe to see the next slide.<br />*/}
                    {/*</div>*/}
                    {/*<div style={styles.slide}>*/}
                        {/*slide n°2*/}
                    {/*</div>*/}
                    {/*<div style={styles.slide}>*/}
                        {/*slide n°3*/}
                    {/*</div>*/}
                </SwipeableViews>
            </div>
        );
    }
}
TabsExampleSwipeable.propTypes = {
    views: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};
TabsExampleSwipeable.defaultProps = {};
