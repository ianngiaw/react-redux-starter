import 'bulma/css/bulma.css';

import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/'
});
const store = createStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});
const routes = require('./routes').default(store);

// console.log(routes); // eslint-disable-line

const MOUNT_ELEMENT = document.getElementById('app');

render(
  <AppContainer history={history} store={store} routes={routes}/>,
  MOUNT_ELEMENT
);
