import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
