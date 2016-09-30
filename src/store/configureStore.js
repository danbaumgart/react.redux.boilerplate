import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  );
  const store = createStore(reducer, initialState, enhancer);
  devTools.updateStore(store);
  return store;
}
