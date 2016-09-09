// import { injectReducer } from '../../store/reducers';

export default () => ({ // (store) => ({
  path: 'home',
  getComponent(nextState, cb) {
    const HomeContainer = require('./containers/HomeContainer').default;
    // const reducer = require('../../reducers/home').default;
    // injectReducer(store, { key: 'home', reducer });

    cb(null, HomeContainer);
  }
});
