import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import RootComponent from './routes';

const ROOT_ELEMENT = document.getElementById('app');
render(
  <Provider store={createStore()}>
    <RootComponent/>
  </Provider>,
  ROOT_ELEMENT
);
