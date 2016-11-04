import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {getHomeLinks, getUserLinks} from './actions/linksActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import muiCustom from './styles/muiCustom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {initializeRegistrationStore} from './actions/registrationActions';
injectTapEventPlugin();

const store = configureStore();
Promise.all([
  store.dispatch(getHomeLinks()),
  store.dispatch(getUserLinks()),
  store.dispatch(initializeRegistrationStore())])
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiCustom)}>
    <Router history={browserHistory} routes={routes}/>
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
