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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/material-design-lite/material.min.js';
import './styles/styles.css';
import "../node_modules/material-design-lite/material.min.css";
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadAuthors());
store.dispatch(loadCourses());
store.dispatch(getAccountSchema());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
