import { useEffect, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import { routes } from './routes';
import Nav from './components/Nav/Nav';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []); //eslint-disable-line

  return (
    <>
      <Nav />
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          {routes.map(
            ({
              exact,
              path,
              component: Component,
              privateRoute,
              title,
              restricted,
            }) =>
              privateRoute ? (
                <PrivateRoute
                  key={title}
                  path={path}
                  component={Component}
                  exact={exact}
                  title={title}
                  restricted={restricted}
                />
              ) : (
                <PublicRoute
                  key={title}
                  path={path}
                  component={Component}
                  exact={exact}
                  title={title}
                  restricted={restricted}
                />
              ),
          )}
          <NotFoundPage />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
