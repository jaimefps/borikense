// dependencies:
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// components & reducers:
import Translator from './components/Translator';
import allReducers from './store';

// extras:
const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Translator />
  </Provider>,
  document.getElementById('root'),
);