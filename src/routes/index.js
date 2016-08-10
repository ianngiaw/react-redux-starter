import MainLayout from '../components/MainLayout/MainLayout';
import HomeRoute from './Home';
import HomeView from './Home/components/HomeView';

const createRoutes = store => ({
  path: '/',
  component: MainLayout,
  indexRoute: {
    component: HomeView
  },
  childRoutes: [
    HomeRoute(store)
  ]
});

export default createRoutes;
