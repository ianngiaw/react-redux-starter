import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';

const ROOT_ELEMENT = document.getElementById('app');
render(
  <Provider store={createStore()}>
  </Provider>,
  ROOT_ELEMENT
);
