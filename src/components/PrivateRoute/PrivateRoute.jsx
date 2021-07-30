import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
