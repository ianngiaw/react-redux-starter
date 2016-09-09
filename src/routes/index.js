import MainLayout from '../components/MainLayout/MainLayout';
import HomeContainer from './home/containers/HomeContainer';
import MyRoute from './my_route';

const createRoutes = store => ({
  path: '/',
  component: MainLayout,
  indexRoute: {
    component: HomeContainer
  },
  childRoutes: [
    MyRoute(store)
  ]
});

export default createRoutes;
