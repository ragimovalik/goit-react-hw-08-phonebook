import { NavLink } from 'react-router-dom';
// import { routes } from '../../routes';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Nav.module.css';

import AuthNav from './AuthNav';

const Nav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={styles.Header__box}>
      <nav className={styles.Nav}>
        <ul className={styles.Nav__links}>
          <li key="HomePage">
            <NavLink
              to="/"
              exact
              className={styles.Nav__item}
              activeClassName={styles['Nav__item--active']}
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <li key="Contacts">
              <NavLink
                to="/contacts"
                exact
                className={styles.Nav__item}
                activeClassName={styles['Nav__item--active']}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default Nav;
