import { injectReducer } from '../../store/reducers';
import { reducer } from './reducers';
import MyRouteContainer from './containers/MyRouteContainer';

export default store => ({
  path: 'my_route',
  getComponent(nextState, cb) {
    injectReducer(store, { key: 'myRoute', reducer });
    cb(null, MyRouteContainer);
  }
});
