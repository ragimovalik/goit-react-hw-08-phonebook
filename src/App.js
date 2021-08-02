import { useEffect, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { getCurrentUser } from './redux/auth/auth-operations';
import { routes } from './routes';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Nav from './components/Nav/Nav';
import Spinner from './components/Spinner';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []); //eslint-disable-line

  return (
    <>
      <Nav />
      <Suspense fallback={<Spinner size="5rem" />}>
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
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default App;
