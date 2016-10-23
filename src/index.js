import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadAuthors} from './actions/authorActions';
import {loadCourses} from './actions/courseActions';
import {getAccountSchema} from './actions/accountActions';
import {getHomeLinks, getUserLinks} from './actions/linksActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import muiCustom from './styles/muiCustom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadAuthors());
store.dispatch(loadCourses());
store.dispatch(getAccountSchema());
store.dispatch(getHomeLinks());
store.dispatch(getUserLinks());
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiCustom)}>
    <Router history={browserHistory} routes={routes}/>
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
