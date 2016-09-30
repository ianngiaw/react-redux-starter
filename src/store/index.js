import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from 'rootDir/reducers';
import rootEpic from 'rootDir/epics';

const store = () => createStore(
  rootReducer,
  applyMiddleware(thunk, createEpicMiddleware(rootEpic))
);

export default store;
