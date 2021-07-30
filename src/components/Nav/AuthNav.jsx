import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.Nav__auth}>
      <li key="LoginPage">
        <NavLink
          to="/login"
          exact
          className={styles.Nav__item}
          activeClassName={styles['Nav__item--active']}
        >
          Login
        </NavLink>
      </li>
      <li key="RegistrationPage">
        <NavLink
          to="/registration"
          exact
          className={styles.Nav__item}
          activeClassName={styles['Nav__item--active']}
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
