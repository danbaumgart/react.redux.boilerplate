import React from '../utils/react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeNavbar, toggleNavbar} from '../actions/navbarActions';
import AppBar from 'material-ui/AppBar';
import Drawer from '../ui/navigation/drawer';
import {browserHistory} from 'react-router';
import NavbarDropdown from '../ui/NavbarDropdown';
import SnackbarManager from '../ui/SnackbarManager';
import {TitleHandler} from '../routes';
import {loadStates} from '../actions/creators/states';
import {loadCountries} from '../actions/creators/countries';
import {loadConfirmations} from '../actions/creators/confirmations';
import Paper, {DISPLAY, POSITION} from '../ui/common/paper';
const ipsum = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

class App extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.props.actions.toggleNavbar();
    }

    closeNavbar() {
        this.props.actions.closeNavbar();
    }
    static changeRoute(event) {
        browserHistory.push(event)
    }
    render() {
        const title = "Trinita Wellness";
        const goHome = () => {
            this.closeNavbar();
            App.changeRoute('/');
        };
        const style = {
            container: {backgroundColor: "rgb(235, 235, 235)"},
            appBar: {position: "fixed", top: "0px"},
            appBarTitle: {cursor: "pointer"},
            paper: {backgroundColor: "rgb(215, 215, 215)", top: "64px", position: "absolute", bottom: "5px", display: "inline-block", width: "100%"},
            appBarPaper: {zDepth: 5, top: 0, position: POSITION.FIXED},
            bodyPaper: {display: DISPLAY.BLOCK, padding: 0, span: 12, position: POSITION.ABSOLUTE, top: 64, bottom: 0, scroll: true},
            footerPaper: {zDepth: 4, height: 62, span: 12, position: POSITION.FIXED, bottom: 0},
            stepperPaper: {zDepth: 2, height: 30, position: POSITION.FIXED, span: 12, top: 64}
        };
        return (
            <div>
                <Paper {...style.bodyPaper}>{this.props.children}</Paper>
                <Paper {...style.appBarPaper}>APPBAR</Paper>
                <AppBar title={<span style={style.appBarTitle}>{this.props.title}</span>}
                        onTitleTouchTap={goHome}
                        iconElementRight={<NavbarDropdown links={this.props.userLinks}
                                                          changeRoute={App.changeRoute}
                                                          closeNavbar={this.closeNavbar}/>}
                        onRightIconButtonTouchTap={this.closeNavbar}
                        style={style.appBar}
                        onLeftIconButtonTouchTap={this.toggleNavbar}/>
                <Drawer title={title}
                        changeRoute={App.changeRoute}
                        handleToggle={this.toggleNavbar}
                        handleClose={this.closeNavbar}
                        collapsed={this.props.collapsed}
                        links={this.props.links}/>
                <SnackbarManager/>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object.isRequired,
    collapsed: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    actions: React.PropTypes.object.isRequired,
    links: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    currentLocation: React.PropTypes.string,
    userLinks: React.PropTypes.array.isRequired
};
App.contextTypes = {
    router: React.PropTypes.object
};


function mapStateToProps(state, ownProps) {
    let currentLocation = '/';
    currentLocation += ownProps.routes[1].path || '';
    const sliceOfCurrent = currentLocation.slice(1);
    const title = TitleHandler[sliceOfCurrent] || "Home";
    const {homeLinks, userLinks} = state.links;
    return {
        loading: state.ajaxCallsInProgress > 0,
        collapsed: state.navbarCollapsed,
        links: homeLinks,
        title,
        currentLocation,
        userLinks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            closeNavbar,
            toggleNavbar,
            loadConfirmations,
            loadStates,
            loadCountries
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
