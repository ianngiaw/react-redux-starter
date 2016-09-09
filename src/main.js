import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

import './styles/main.scss';

injectTapEventPlugin();
const store = createStore({}, hashHistory);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: (state) => state.router
});
const routes = require('./routes').default(store);

const MOUNT_ELEMENT = document.getElementById('app');

render(
  <AppContainer history={history} store={store} routes={routes}/>,
  MOUNT_ELEMENT
);
