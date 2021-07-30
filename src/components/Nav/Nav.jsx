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

/*

 {routes.map(route => {
            switch (route.title) {
              case 'Home':
                return (
                  <li key={route.title}>
                    <NavLink
                      to={route.path}
                      exact={route.exact}
                      className={styles.Nav__item}
                      activeClassName={styles['Nav__item--active']}
                    >
                      {route.title}
                    </NavLink>
                  </li>
                );

              default:
                return (
                  <li key={route.title}>
                    <NavLink
                      to={route.path}
                      exact={route.exact}
                      className={styles.Nav__item}
                      activeClassName={styles['Nav__item--active']}
                    >
                      {route.title}
                    </NavLink>
                  </li>
                );
            }
          })}
        </ul>


//=================================
 routes.map(link => 
  isLogIn ? 

  <ul>
     !link.authMenuItem && link.privateRoute && ...
  </ul>
  <Usermenu/>
      : 
<ul>
     !link.authMenuItem && !link.privateRoute && ...
  </ul>
<ul>
link.authMenuItem && ...
</ul>

  )
  //-----------------------------------------------

 <ul className={styles.Nav__links}>
          {routes.map(link => {
            return (
              !link.authMenuItem && (
                <li key={link.title}>
                  <NavLink
                    to={link.path}
                    exact={link.exact}
                    className={styles.Nav__item}
                    activeClassName={styles['Nav__item--active']}
                  >
                    {link.title}
                  </NavLink>
                </li>
              )
            );
          })}
        </ul>

        {isLogIn ? (
          <UserMenu />
        ) : (
          <ul className={styles.Nav__auth}>
            {routes.map(link => {
              return (
                link.authMenuItem && (
                  
                )
              );
            })}
          </ul>
        )}
      </nav>

//------------------------------------------------------


      <nav className={styles.Nav}>
        {routes.map(link =>
          isLogIn ? (
            <>
              <ul className={styles.Nav__auth}>
                {!link.authMenuItem && (
                  <li key={link.title}>
                    <NavLink
                      to={link.path}
                      exact={link.exact}
                      className={styles.Nav__item}
                      activeClassName={styles['Nav__item--active']}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                )}
              </ul>
              <UserMenu />
            </>
          ) : (
            <>
              <ul className={styles.Nav__auth}>
                {!link.authMenuItem && !link.privateRoute && (
                  <li key={link.title}>
                    <NavLink
                      to={link.path}
                      exact={link.exact}
                      className={styles.Nav__item}
                      activeClassName={styles['Nav__item--active']}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                )}
              </ul>
              <ul className={styles.Nav__auth}>
                {link.authMenuItem && (
                  <li key={link.title}>
                    <NavLink
                      to={link.path}
                      exact={link.exact}
                      className={styles.Nav__item}
                      activeClassName={styles['Nav__item--active']}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                )}
              </ul>
            </>
          ),
        )}
      </nav>

*/
