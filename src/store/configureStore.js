import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  ));
  
}
