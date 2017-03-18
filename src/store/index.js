import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers';
import rootEpic from '../epics';

const store = () => createStore(
  rootReducer,
  applyMiddleware(createEpicMiddleware(rootEpic))
);

export default store;
